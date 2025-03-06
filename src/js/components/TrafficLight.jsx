import React, { useState } from "react";

export const Semaforo = () => {
    const [color, setColor] = useState("");
    return (
        <>
            <div className="sujetador container"></div>
            <div className="container bg-dark text-light" id="principal">
                <div className={`red red-light ${color === "red" ? "glow" : " "}`}
                    onClick={() => { setColor("red") }}>
                </div>
                <div className={`yellow yellow-light ${color === "yellow" ? "glow" : " "}`}
                    onClick={() => { setColor("yellow") }}>

                </div>
                <div className={`green green-light ${color === "green" ? "glow" : " "}`}
                    onClick={() => { setColor("green") }}>

                </div>
            </div>
        </>
    )
}

