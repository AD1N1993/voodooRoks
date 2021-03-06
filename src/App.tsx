import React, {MouseEvent, useEffect, useState} from 'react';
import {saveStateToLS, restoreState} from "./utils/HtmlParser"
import {useDispatch, useSelector} from "react-redux";
import {getLoremHTML, setKey} from "./store/app-reducer";
import {RootStateRedux} from "./store/store";
import {Preloader} from "./common/Preloader/Preloader";
import {parseHtml} from "./utils/HtmlParser";
import styles from './App.module.scss';


const App = () => {
  const html = useSelector<RootStateRedux, string>(state => state.app.html);
  const error = useSelector<RootStateRedux, string | null>(state => state.app.error);
  const isFetch = useSelector<RootStateRedux, boolean | null>(state => state.app.isFetch);
  const lsKey = useSelector<RootStateRedux, string>(state => state.app.lsKey);

  const [currentHtml, setCurrentHtml] = useState(html);

  const [count, setCount] = useState(10);

  const dispatch = useDispatch();

  const saveHtmlToLS = (key: string, value: string) => {
    if (key === 'part1') dispatch(setKey('part2'))
    saveStateToLS(key, value)
  }

  const setHtmlFromLS = (key: string) => {
    if (key === 'part2') {
      dispatch(setKey('part1'))
    } else {
      dispatch(setKey('part2'))
    }
    const prevHtml = restoreState(key === 'part2' ? 'part1' : "part2", "");
    setCurrentHtml(prevHtml);
  }

  useEffect(() => {
    dispatch(getLoremHTML(count, "short", "headers"));
  }, [count])

  useEffect(() => {
    if (isFetch) setCurrentHtml(html)
    if (html) saveHtmlToLS(lsKey, html)
  }, [isFetch])

  const parsedElements = parseHtml(currentHtml);

  const resultData = parsedElements.props.children.reduce((acc: any, curr: JSX.Element)=>{
    acc.hasOwnProperty(curr.type) ? acc[curr.type].push(curr):acc[curr.type] = [curr];
    return acc
  },{})

  const keys = Object.keys(resultData).sort();

  if (!isFetch) return <Preloader/>

  if (error) return <h3>{error}</h3>

  const countPostsHandler = (e: MouseEvent<HTMLButtonElement>) => {
    setCount(+e.currentTarget.value)
  }
  return (
    <section className={styles.app}>
      <div>
        <button onClick={() => setHtmlFromLS(lsKey)}>Посмотреть прошлый</button>
        <button value={5} onClick={countPostsHandler}>5</button>
        <button value={10} onClick={countPostsHandler}>10</button>
        <button value={15} onClick={countPostsHandler}>15</button>
      </div>
      {keys.map((k)=>resultData[k])}
    </section>
  );
}

export default App;
