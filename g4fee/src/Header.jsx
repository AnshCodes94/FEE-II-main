import React, { useState , useEffect } from "react";
import { BiMenu } from "react-icons/bi";
export function Header(){
    const [dark , setDark] = useState(false);

    useEffect(()=>{
        if(dark){
            document.body.style.backgroundColor = "hsl(215,100%,50%)";
        }
    }, [dark]);