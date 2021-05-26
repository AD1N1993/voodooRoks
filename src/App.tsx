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
  const isFetchStatus = useSelector<RootStateRedux, boolean | null>(state => state.app.isFetch);
  const lsKey = useSelector<RootStateRedux, string>(state => state.app.lsKey);

  const [currentHtml, setCurrentHtml] = useState(html);
  const [count, setCount] = useState(10);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLoremHTML(count, "short", "headers"));
  }, [count])

  useEffect(() => {
    if (isFetch === true) setCurrentHtml(html)
    if (html) saveHtmlToLS(lsKey, html)
  }, [isFetch])

  const parsedElements = parseHtml(currentHtml);

  const getElementsByType = (type: IType) => {
    return parsedElements.props.children.filter((el: any) => el.type === type)
  }
  const data = {
    h1: getElementsByType("h1"),
    h2: getElementsByType("h2"),
    h3: getElementsByType("h3"),
    h4: getElementsByType("h4"),
    h5: getElementsByType("h5"),
    h6: getElementsByType("h6"),
    p: getElementsByType("p")
  }

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

  if (!isFetchStatus) return <Preloader/>

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
      {data.h1.length > 0 && <div>Заголовки H1:{data.h1}</div>}
      {data.h2.length > 0 && <div>Заголовки H2:{data.h2}</div>}
      {data.h3.length > 0 && <div>Заголовки H3:{data.h3}</div>}
      {data.h4.length > 0 && <div>Заголовки H4:{data.h4}</div>}
      {data.h5.length > 0 && <div>Заголовки H5:{data.h5}</div>}
      {data.h6.length > 0 && <div>Заголовки H6:{data.h6}</div>}
      {data.p.length > 0 && <div>Параграфы:{data.p}</div>}
    </section>
  );
}

export default App;

type IType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
