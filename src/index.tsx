import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Welcome} from "./pages/welcome";
import {Header} from "./components/header/header";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header items={[
                {
                    name: "Руководство",
                    filling: "hello"
                },
                {
                    name: "Вопрос - ответ",
                    filling: "hello"
                },
                {
                    name: "Поддержка",
                    filling: "hello"
                },
                {
                    name: "Вход",
                    filling: "hello"
                },
            ]} clickListener={(x?: string)=>{alert(x); return undefined;}}/>


            <Routes>
                <Route path={"/app/"} element={<Welcome/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

