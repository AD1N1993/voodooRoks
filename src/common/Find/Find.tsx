import React from "react";
import s from "./Find.module.scss"
import search from "../../assets/img/search.png"

export const Find = (props: FindType) => {
    return (
        <div className={s.findWrapper}>
            <button className={s.findBtn} disabled={true}>
                <img src={search} alt="search"/>
            </button>
            <input className={s.findInput}
                   value={props.findAuthor}
                   onChange={(e) => {
                       props.onChange(e.currentTarget.value)
                   }}
                   autoComplete={"off"}
                   name={"search"}
                   type="text" id={"search"}
                   placeholder={"Filter by author..."}
            />
        </div>
    );
}

type FindType = {
    findAuthor: string,
    onChange: (value: string) => void
}
