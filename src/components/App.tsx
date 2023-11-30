import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./header/header";
import {Welcome} from "../pages/welcome";
import React, {useState} from "react";
import {Credentials, getCredentials} from "../api/auth";
import {AuthContext} from "../context";

export function App(){

    const [user, setUser] = useState<Credentials>(getCredentials());

    return(
        <AuthContext.Provider value={user}>
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
                        }
                    ]} clickListener={(x?: string)=>{alert(x); return undefined;}}/>


                    <Routes>
                        <Route path={"/app/"} element={<Welcome/>}/>
                    </Routes>
                </BrowserRouter>
            </React.StrictMode>
        </AuthContext.Provider>
    )
}