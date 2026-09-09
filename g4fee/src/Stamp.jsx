import React, { useState } from "react";

export function Stamp(){
    const [msg, setMsg] = useState("");

    const stamp = { section: "G4" , roll_number: "1324", name:"Ansh"};

    function handleClick(){
        localStorage.setItem("stamp", JSON.stringify(stamp));
        setMsg("updated");
    }

    return (
        <div className="box2 mt2">
            <h3>We have got stamp data</h3>
            <br/>
            {msg === "" && <button onClick={handleClick}>Click here</button>}
            {msg === "updated" && <p className="bg1 p1">Stamp created</p>}
        </div>
    );
}