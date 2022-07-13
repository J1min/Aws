/* eslint-disable */
import React, { useState } from "react";
import axios from "axios";
const API = (search) =>
    `https://fake-movie-database-api.herokuapp.com/api?s=${search}`;

export const getMovieListUseFetch = async (search) => {
    try {
        const response = await fetch(API(search), { method: "GET" }).then((r) =>
            r.json()
        );
        return response.Search;
    } catch (err) {
        console.error("getMovieList - fetch error: " + err);
    }
};

export const getMovieListUseAxios = async (search) => {
    try {
        // response  : { Search }, // 확신이 있다면 이렇게 써서 코드이쁘게 ㄱㄱ
        const response = await axios.get(API(search));
        return response.data.Search;
    } catch (err) {
        console.error("getMovieList - axios error: " + err);
    }
};
