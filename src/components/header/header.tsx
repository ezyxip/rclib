import "./header.css"
import {InlineButton} from "../inline-button/inline-button";
import {useContext} from "react";
import {AuthContext} from "../../context";

export function Header<T>(
            {
                items= [{name: "Главная", filling: undefined}],
                clickListener= ()=>undefined
            }: {
                items:{name: string, filling?: T}[],
                clickListener: (a : T | undefined) => void
            }
    ) {
    const auth = useContext(AuthContext);
    return (
        <header className={"header"}>
            <ul className="header__nav">
                {
                    items.map(x => <li> <InlineButton text={x.name} filling={x.filling!} clickListener={clickListener}/> </li>)
                }
            </ul>
        </header>
    )
}