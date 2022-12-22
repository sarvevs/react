import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Task2 from "./pages/task2";
import Home from "./pages/home";
import Task3 from "./pages/task3";
import Task4 from "./pages/task4";
import Task5 from "./pages/task5";
import Task6 from "./pages/task6";



const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/task2'} element={<Task2/>}/>
                    <Route path={'/task3'} element={<Task3/>}/>
                    <Route path={'/task4'} element={<Task4/>}/>
                    <Route path={'/task5'} element={<Task5/>}/>
                    <Route path={'/task6'} element={<Task6/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default AppRouter;
