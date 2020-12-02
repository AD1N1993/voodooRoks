import React, {useEffect, useState} from 'react';
import s from './App.module.scss';
import {Post} from "./common/Post/Post";
import {ResponseAuthorsDataType, ResponsePostsDataType} from "./api/api";
import {useDispatch, useSelector} from "react-redux";
import {setDataTC} from "./App/app-reducer";
import {RootStateRedux} from "./store/store";
import {Find} from './common/Find/Find';
import {Preloader} from "./common/Preloader/Preloader";

function App() {
    const postsData = useSelector<RootStateRedux, ResponsePostsDataType[]>(state => state.app.posts);
    const authorsData = useSelector<RootStateRedux, ResponseAuthorsDataType[]>(state => state.app.users);
    const isFetchStatus = useSelector<RootStateRedux, boolean | null>(state => state.app.isFetch);
    const error = useSelector<RootStateRedux, string | null>(state => state.app.error);

    const dispatch = useDispatch();
    const [filterValue, setFilterValue] = useState("");

    useEffect(() => {
        dispatch(setDataTC());
    }, [dispatch])

    const findAuthorName = (id: number) => {
        let author = authorsData.find(a => a.id === id);
        if (author) {
            return author.name
        } else {
            return "unknown"
        }
    }

    let posts = postsData.map(p => {
        return {...p, author: findAuthorName(p.userId)};
    })

    const getFilteredData = () => {
        return posts.filter(el => el.author.toLowerCase().includes(filterValue.toLowerCase()));
    }

    const filteredData = getFilteredData();
    const onChangeFindAuthor = (value: string) => {
        setFilterValue(value);
    }

    if (!isFetchStatus) return <Preloader/>

    if (error) return <h3>{error}</h3>

    return (
        <div className={s.app}>
            <div className={s.container}>
                <Find onChange={onChangeFindAuthor} findAuthor={filterValue}/>
                <div className={s.posts}>
                    {
                        filteredData.map(p => <Post key={p.id}
                                                    userId={p.userId}
                                                    id={p.id}
                                                    title={p.title}
                                                    body={p.body}
                                                    author={p.author}
                        />)
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
