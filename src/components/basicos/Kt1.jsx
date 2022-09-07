import {useState, useEffect} from "react";

export const Kt = () => {
    const [contador, setContador] = useState(0);    
    const [nome, setNome] = useState('');

    useEffect (() => {
        document.title = `Contador: ${contador}`
    },[contador]);

    useEffect (() => {
        
    },[])

    const decrementar = () => {
        setContador(contador - 1);
    }

    const incrementar = () => {
        setContador(contador + 1)
    }
    return (
        <div>
           <buttun onClick={decrementar}>-1</buttun>
           <buttun onClick={incrementar}>+1</buttun>
           <p>{contador}</p>
           <input onChange={ev => setNome(ev.currentTarget.value)}></input>
           <p>Nome: {nome}</p>          
        </div>
    );
} 