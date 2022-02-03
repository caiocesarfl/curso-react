import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const {min, max} = props;
    const resultado = parseInt(Math.random() * (max - min + 1) + min);
    
    return (
        <div>
            <p>Valor Aleatório: {resultado} </p>
        </div>
    )
}