import React from "react";
import "./App.css";

import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro';
import Fragment from './components/basicos/Fragment';
import Aleatorio from './components/basicos/Aleatorio'
import Card from "./components/layout/Card";
import ListaAlunos from "./components/repeticao/ListaAlunos";

// eslint-disable-next-line import/no-anonymous-default-export
export default _ =>
    <div className="App">
        <h1> Fundamentos React </h1>
        <div className="Cards">
            <Card titlulo="#06 - Repetição" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card> 

            <Card titulo="#05 - Componente com filhos" color="#00C8F8">
                <Familia sobrenome="Silva"> 
                    <FamiliaMembro nome="João" />
                    <FamiliaMembro nome="Luisa" /> 
                    <FamiliaMembro nome="Victoria"/> 
                </Familia>
            </Card> 

            <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio
                    min={0}
                    max={10000}
                />
            </Card>  

            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragment />
            </Card>  

            <Card titulo="#02 - Componente com Parâmetro" color="#E8B71A">
                <ComParametro
                    nome="Karine"
                    nota="7"
                />
                <ComParametro
                    nome="Ana Paula "
                    nota="5"
                />
            </Card>    

            <Card titulo="#01 - Componente com Parâmetro" color="#588C73"> 
                <Primeiro />
            </Card>   
        </div>
    </div>

