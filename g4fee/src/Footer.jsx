import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";

export function Footer() { 
  const [stamp] = useState(() => {
    const savedStamp = localStorage.getItem("stamp");
    return savedStamp ? JSON.parse(savedStamp) : {};
  });

  return (
    <div 
      className="fx fs2 p2"
      style={{
        height: "4rem",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        width: "100%",
        bottom: "0px",
        left: "0px",
        backdropFilter: "blur(10px)",
        borderTop: "1px solid silver",
      }}
    >
      <button className="btn1 fs3">
        <BiMenu />
      </button>

      <div>
        {stamp.section && stamp.roll_number && stamp.name
          ? `${stamp.section}_${stamp.roll_number}_${stamp.name}`
          : ""}
      </div>

      <button className="btn1 fs3">
        <BiMenu />
      </button>
    </div>
  );
}