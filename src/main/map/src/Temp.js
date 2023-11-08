import React from "react";
import axios from "axios";
async function Temp(){
    const res = await fetch("/chacha");
    const data = res.json();
    return(
        <div>
            <h1>{data}</h1>
        </div>
    )
}

export default Temp;