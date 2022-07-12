/* eslint-disable */
import React, { useState } from "react";
import useStore from "../utils/useStore";
export default function Todo() {
    const { title, content } = useStore();
    const setTitle = useStore((state) => state.setTitle);
    const setContent = useStore((state) => state.setContent);
    return (
        <div>
            {title.map((data, index) => {
                return (
                    <div
                        key={index}
                        style={{
                            margin: "20px 0",
                            backgroundColor: "gray",
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "0 10px",
                        }}
                    >
                        <div>
                            <p>{data}</p>
                            <p>{content[index]}</p>
                        </div>
                        <button
                            style={{
                                width: "10%",
                                height: "50px",
                                display: "flex",
                                alignItems: "center",
                            }}
                            onClick={() => {
                                console.log({ index }.index);
                                if (content.length == 1) {
                                    setContent([]);
                                    setTitle([]);
                                } else {
                                    setContent(
                                        content.filter(
                                            (content) =>
                                                content.indexOf() !=
                                                { index }.index
                                        )
                                    );
                                }
                            }}
                        >
                            X
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
