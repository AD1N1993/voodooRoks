import React, {useEffect, useState} from 'react';
import {saveStateToLS, restoreState} from "./utils/helper"
import {useDispatch, useSelector} from "react-redux";
import {getLoremHTML} from "./App/app-reducer";
import {RootStateRedux} from "./store/store";
import {Preloader} from "./common/Preloader/Preloader";
import {parser} from "./utils/helper";
import styles from './App.module.scss';

type HtmlByGroup = {
    h1: string[]
    h2: string[]
    h3: string[]
    h4: string[]
    h5: string[]
    h6: string[]
    p: string[]
}

function App() {
    const html = useSelector<RootStateRedux, string>(state => state.app.html);
    const isFetch = useSelector<RootStateRedux, boolean | null>(state => state.app.isFetch);
    const [newHtml, setNewHtml] = useState(html);
    const isFetchStatus = useSelector<RootStateRedux, boolean | null>(state => state.app.isFetch);
    const error = useSelector<RootStateRedux, string | null>(state => state.app.error);
    const dispatch = useDispatch();
    const htmlByGroup: HtmlByGroup = {
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        p: []
    }
    const parsedElements = parser(newHtml);

    parsedElements.forEach((el) => {
        if (el.includes("<h1>")) {
            htmlByGroup.h1.push(el)
        } else if (el.includes("<h2>")) {
            htmlByGroup.h2.push(el)
        } else if (el.includes("<h3>")) {
            htmlByGroup.h3.push(el)
        } else if (el.includes("<h4>")) {
            htmlByGroup.h4.push(el)
        } else if (el.includes("<h5>")) {
            htmlByGroup.h5.push(el)
        } else if (el.includes("<h6>")) {
            htmlByGroup.h6.push(el)
        } else {
            htmlByGroup.p.push(el);
        }
    });

    useEffect(() => {
        dispatch(getLoremHTML(12, "short", "headers"));
    }, [])

    useEffect(() => {
        if (isFetch === true) setNewHtml(html)
    }, [isFetch])

    const saveHtmlToLS = (value: string) => {
        saveStateToLS("previousHtml", value)
    }

    const setHtmlFromLS = (key: string) => {
        const prevHtml = restoreState(key, "");
        setNewHtml(prevHtml);
    }

    if (!isFetchStatus) return <Preloader/>

    if (error) return <h3>{error}</h3>

    return (
        <section className={styles.app}>
            {htmlByGroup.h1.length > 0 &&
			<div className={styles.mainTitle} dangerouslySetInnerHTML={{__html: htmlByGroup.h1[0]}}/>}
            {htmlByGroup.h2.length > 0 && <div dangerouslySetInnerHTML={{__html: htmlByGroup.h2.join("")}}/>}
            {htmlByGroup.h3.length > 0 && <div dangerouslySetInnerHTML={{__html: htmlByGroup.h3.join("")}}/>}
            {htmlByGroup.h4.length > 0 && <div dangerouslySetInnerHTML={{__html: htmlByGroup.h4.join("")}}/>}
            {htmlByGroup.h5.length > 0 && <div dangerouslySetInnerHTML={{__html: htmlByGroup.h5.join("")}}/>}
            {htmlByGroup.h6.length > 0 && <div dangerouslySetInnerHTML={{__html: htmlByGroup.h6.join("")}}/>}
            {htmlByGroup.p.length > 0 && <div dangerouslySetInnerHTML={{__html: htmlByGroup.p.join("")}}/>}
            <button onClick={() => saveHtmlToLS(html)}>Сохранить</button>
            <button onClick={() => setHtmlFromLS("previousHtml")}>Посмотреть прошлый</button>
        </section>
    );
}

export default App;
