import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import "./script/language";

import HomePage from "./page/home";
import HeaderLayout from './layout/header';

function App()
{
    return (
        <React.StrictMode>
            <BrowserRouter>

                <HeaderLayout />

                <Routes>
                    <Route path="/" element={ <HomePage /> } />
                    <Route path="/Swap" element={ <HomePage /> } />
                    <Route path="/Lend" element={ <HomePage /> } />
                    <Route path="/NFT" element={ <HomePage /> } />
                </Routes>

            </BrowserRouter>
        </React.StrictMode>);
}

ReactDOM.render(<App />, document.getElementById("App"));

declare global
{
    interface Window
    {
        ethereum: any;
    }
}
