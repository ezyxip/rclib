import React from "react";
import "./button.css"

export function Button<T>(
    {children, className, type = "primary", filling = undefined, clickListener = ()=>{}}: {
        children: string,
        className?: string,
        type?: string,
        filling?: T,
        clickListener?: (a: T | undefined) => void
    }
){
    let buttonType = "button--" + type + " ";
    return(
        <button className={"button "+ buttonType + className!} onClick={()=>{clickListener(filling)}}>{children}</button>
    )
}
