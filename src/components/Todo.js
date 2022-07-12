/* eslint-disable */
import React, { useState } from "react";
import useStore from "../utils/useStore";
export default function Todo() {
    let { title, content } = useStore();

    return (
        <div>
            {title.map((data, index) => {
                return (
                    <div key={index}>
                        <div>{data}</div>
                        <div>{content[index]}</div>
                    </div>
                );
            })}
        </div>
    );
}
