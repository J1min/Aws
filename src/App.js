import React from "react";
import useStore from "./utils/useStore";
import Todo from "./components/Todo";
export default function App() {
    const { nowTitle, nowContent, title, content } = useStore();
    const setTitle = useStore((state) => state.setTitle);
    const setContent = useStore((state) => state.setContent);
    const setNowTitle = useStore((state) => state.setNowTitle);
    const setNowContent = useStore((state) => state.setNowContent);
    return (
        <div>
            {nowTitle} <br />
            {nowContent}
            <div>
                <div style={{ width: "100%" }}>
                    <input
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
                        setNowTitle("")
                        setNowContent("")
                    }}
                >
                    가봅시다
                </button>
                <div>
                    <Todo></Todo>
                </div>
            </div>
        </div>
    );
}
