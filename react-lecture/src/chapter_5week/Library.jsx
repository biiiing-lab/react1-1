import React from "react";
import Book from "./Book";

export default function Library(props) {
    return (
        <div>
            <Book name = "처음 만난 파이썬" numOfPage={300} />
            <Book name = "처음 만난 aws" numOfPage={400} />
            <Book name = "처음 만난 react" numOfPage={500} />
        </div>
    )
}