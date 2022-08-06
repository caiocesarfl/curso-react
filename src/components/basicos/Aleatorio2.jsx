import React from "react";

export default function (props) {
    const randonNumeber = Math.floor(Math.random() * props.max) + props.min;
    return (
       <div>
            <p> Número Aleatório : {randonNumeber}</p>
       </div>     
    );
}