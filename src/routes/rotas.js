import React from 'react';
import { BrowserRouter, Route, Routes, HashRouter} from 'react-router-dom';
import { Home } from '../pages/home/home';
import { PokeInfo } from '../pages/pokeInfo/pokeInfo.jsx'

export function Rotas() {
    return(
        <BrowserRouter>
                <Routes>
                    <Route element = { <Home/> } exact path="/"></Route>
                    <Route element = { <PokeInfo/> } path="/pokemon"></Route>
                </Routes>
        </BrowserRouter>
    )
 }