import {Container} from "../components/container/container";
import {LinkButton} from "../components/link-button/link-button";
import React from "react";


export function Welcome(){

    return(
        <Container>
            <div className={"a12 l6 m6"}>
                <h1 className={"center bold"}>PAXUX</h1>
                <p className={"center sparse big"}>Управляйте вашим салоном красоты и здоровья с легкостью. Эффективно
                    организуйте записи, управляйте персоналом и привлекайте больше клиентов с нашим веб-сервисом.</p>
            </div>
            <div className={"flex center dir-column wide a6 xs12 s12"}>
                <LinkButton href={"/app/login"} className={"half"}>Войти</LinkButton>
                <LinkButton href={"/app/contacts"} type={"secondary"} className={"half"}>Связаться с поддержкой</LinkButton>
            </div>
        </Container>
    )
}