import React from "react";

export default function ComParametro(props) {
    const situacao = props.nota >= 6 ? "Aprovado" : "Reprovado";

    return (
        <div>
            <p>{props.nome} tem nota {props.nota} e está com a situacao {situacao}</p>
        </div>
    )
}