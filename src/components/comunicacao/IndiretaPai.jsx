import React, {useState} from "react";
import IndiretaFilho from "./IndiretaFilho";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0);
    const [isNerd, setIsNerd] = useState(false);

    function fornecerInformacoes (nome, idade, isNerd) {
        setNome(nome);
        setIdade(idade)
        setIsNerd(isNerd)
    }
    return (
        <div>
            <div>
                <span>{nome} </span>
                <span>{idade} </span>
                <span>{isNerd ? 'Verdadeiro' : 'Falso'} </span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes} ></IndiretaFilho>
        </div>
    )
}