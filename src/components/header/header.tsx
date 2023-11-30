import "./header.css"
import {InlineButton} from "../inline-button/inline-button";
import {useContext} from "react";
import {AuthContext} from "../../context";
import {useNavigate} from "react-router-dom";

export function Header<T>(
    {
        items= [{name: "Главная", filling: undefined}],
        clickListener= ()=>undefined
    }: {
        items?:{name: string, filling?: T}[],
        clickListener: (a : T | undefined) => void
    }
) {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    let label;
    let profile;
    if(auth!.isAuth){
        label = auth!.user.name;
        profile = <li> <InlineButton text={"Профиль"} clickListener={()=>{navigate("/app/profile")}}/> </li>
    } else{
        profile = <li> <InlineButton text={"Вход"} clickListener={()=>{navigate("/app/auth")}}/> </li>
    }

    return (
            <header className={"header"}>
            <span className={"header__label"}>
                {label}
            </span>
                <ul className={"header__nav"}>
                    {
                        items.map(x => <li> <InlineButton text={x.name} filling={x.filling!} clickListener={clickListener}/> </li>)
                    }
                    {profile}
                </ul>
            </header>
            )
}