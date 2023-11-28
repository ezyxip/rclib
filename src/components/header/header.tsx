import "./header.css"
import {InlineButton} from "../inline-button/inline-button";

export function Header<T>(
            {
                items= [{name: "Главная", filling: undefined}],
                clickListener= ()=>undefined
            }: {
                items:{name: string, filling?: T}[],
                clickListener: (a : T | undefined) => void
            }
    ) {
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