import React from "react";
import s from "./Post.module.scss"
type PostDataType = {
    userId: number
    id: number
    title: string
    body: string
    author: string
}


export const Post = (props: PostDataType) => {
    return (
        <div className={s.card}>
            <h3 className={s.title}>{props.title}</h3>
            <p className={s.post}>{props.body}</p>
            <span className={s.author}>{props.author}</span>
        </div>
    )
}