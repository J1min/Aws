import React from "react";
import useStore from "./utils/useStore";
import Todo from "./components/Todo";
export default function App() {
    const { nowTitle, nowContent, title, content } = useStore();
    const setTitle = useStore((state) => state.setTitle);
    const setContent = useStore((state) => state.setContent);
    const setNowTitle = useStore((state) => state.setNowTitle);
    const setNowContent = useStore((state) => state.setNowContent);
    const bindId = document.querySelector("#title");
    const bindContent = document.querySelector("#content");

    return (
        <div>
            {nowTitle} <br />
            {nowContent}
            <div>
                <div style={{ width: "100%" }}>
                    <input
                        id="title"
                        type="text"
                        style={{
                            width: "80%",
                            height: "30px",
                            display: "block",
                            margin: "30px auto",
                        }}
                        onChange={(e) => {
                            setNowTitle(e.target.value);
                        }}
                    />

                    <textarea
                        id="content"
                        style={{
                            width: "80%",
                            height: "90px",
                            display: "block",
                            margin: "30px auto",
                            resize: "none",
                        }}
                        onChange={(e) => {
                            setNowContent(e.target.value);
                        }}
                    />
                </div>
                <button
                    onClick={() => {
                        setTitle([nowTitle, ...title]);
                        setContent([nowContent, ...content]);
                        setNowTitle("");
                        setNowContent("");
                        bindId.value = null;
                        bindContent.value = null;
                    }}
                >
                    가봅시다
                </button>
                <div
                    style={{
                        width: "80%",
                        margin: "0 auto",
                    }}
                >
                    <Todo></Todo>
                </div>
            </div>
        </div>
    );
}
