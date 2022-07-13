/* eslint-disable */
import React, { useState } from "react";
import axios from "axios";
const API = (search) =>
    `https://fake-movie-database-api.herokuapp.com/api?s=${search}`;

export const getMovieList = async (search) => {
    try {
        const response = await fetch(API(search), { method: "GET" }).then((r) =>
            r.json()
        );
        console.log(response);
    } catch (err) {
        alert("네트워크 에러 발생");
        console.error("getMovieList - fetch error: " + err);
    }
};

export const getMovieListUseAxios = () => {
    axios.get(API(search)).then((response) => {});
};
