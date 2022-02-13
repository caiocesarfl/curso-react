import React from "react";
import DiretaFilho from "./DiretaFilho";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div> 
            <DiretaFilho nome='Luisa' idade={25} casado={false}></DiretaFilho>
            <DiretaFilho nome='Gabriel' idade={35} casado={true}></DiretaFilho>
        </div>
    )
}