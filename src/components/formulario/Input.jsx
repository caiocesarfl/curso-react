import "./Input.css";
import React, {useState} from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    
    const[valor, setValor] = useState('Inicial')
    
    function mudar (e) {
        setValor(e.target.value);
    }

    return (
        <div className="Input">
            <h2>{valor}</h2>
            <input value={valor} onChange = {mudar}></input>
        </div>
    )
}

