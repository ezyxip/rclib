import {Button} from "../components/button/button";
import {Container} from "../components/container/container";


export function Welcome(){
    return(
        <Container>
            <div className={"a12 l6 m6"}>
                <h1 className={"center bold"}>PAXUX</h1>
                <p className={"center sparse big"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className={"flex center dir-column wide a6 xs12 s12"}>
                <Button className={"half"}>Войти</Button>
                <Button type={"secondary"} className={"half"}>Связаться с поддержкой</Button>
            </div>
        </Container>
    )
}