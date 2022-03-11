import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const callBack = props.quandoClicar;
    const max = 50;
    const min = 20;
    const gerarIdade = () => parseInt(Math.random() * (max-min)) + min;
    const gerarNerd = () => (parseInt(Math.random() * 10)) % 2 === 0 


    return (
        <div>
            <div>Filho</div>
            <button onClick={_ => callBack('Celso', gerarIdade(), gerarNerd())}>Fornecer Informações</button>
        </div>
    )
}