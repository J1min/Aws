/* eslint-disable */
import logo from "./logo.svg";
import "./App.css";

import { useEffect, useState } from "react";
import useAsyncEffect from "./hooks/useAsyncEffect";
import { getMovieListUseAxios } from "./fetcher/getMovieList";

function App() {
    const [list, setList] = useState([]);
    const [search, setSearch] = useState("batman");
    const loadApiResponse = async () => {
        const data = await getMovieListUseAxios(search);
        // debugger;  # 이거 사용하면 이 지점에서 멈춤
        setList(data);
        console.log(data);
    };
    useAsyncEffect(async () => await loadApiResponse(), []);
    return (
        <div className="App">
            {list.map((i, ix) => {
                return (
                    <div key={ix}>
                        <img src={i.Poster} alt="" />
                        <p>{i.Title}</p>
                        <span>{i.Year}</span>
                    </div>
                );
            })}
        </div>
    );
}

export default App;