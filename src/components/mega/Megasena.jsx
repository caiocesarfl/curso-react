import React, {useState} from "react";

export default props => {
    const [tamanho, setTamanho ] = useState(6);
    const [vet,setVet] = useState([]);

    const sorteia = (tamanho, max, min) => {
        setVet([]);
        for (let i=0; i<=tamanho; i++) {
            let numeroAleatorio = gerarNumero (max,min);
            if (!vet.includes(numeroAleatorio))
                setVet(vet => [...vet, numeroAleatorio]);
        }
        console.log(vet);
        return vet;
    }
    
    const gerarNumero = (max,min) => {
        return parseInt(Math.random() * (max - min + 1) + min);
    }

    function retornaVet(vet) {
        vet.forEach (num => {
            return <span>num</span>
        }) 
    }

    const definirTamanho = (e) =>  {
        setTamanho(e.target.value);
    }
        return (
        <div>
            <label htmlFor="tamanho"></label>
            <input id="tamanho" type="number" value={tamanho} onChange={definirTamanho}/>
            <button onClick={ev => sorteia(1,60,tamanho)}>Sortear</button>
            <p>{retornaVet(vet)}</p>
        </div>
    )
}