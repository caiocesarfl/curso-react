import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div> 
            <div>{props.nome}</div>
            <div>{props.idade}</div>
            <div>{props.casado ? 'Casado' : 'Solteiro'}</div>
        </div>
    )
}