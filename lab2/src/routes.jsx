import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./pages/home";
import Game from "./pages/Game";
import Counter from "./pages/Counter";
import CounterList from "./pages/CounterList";
import Cart from "./components/Cart";




const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/Counter'} element={<Counter/>}/>
                    <Route path={'/CounterList'} element={<CounterList/>}/>
                    <Route path={'/Cart'} element={<Cart/>}/>
                    <Route path={'/Game'} element={<Game/>}/>

                </Routes>
            </BrowserRouter>
        </>
    );
};

export default AppRouter;
