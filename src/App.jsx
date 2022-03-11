import React from "react";
import "./App.css";

import Contador from "./components/contador/Contador";
import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos"
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro';
import Fragment from './components/basicos/Fragment';
import Aleatorio from './components/basicos/Aleatorio'
import Card from "./components/layout/Card";


// eslint-disable-next-line import/no-anonymous-default-export
export default _ =>
    <div className="App">
        <h1> Fundamentos React </h1>
        <div className="Cards">
            <Card titulo="#11 - Contador" color="#424242">
                <Contador numeroInicial={10} passoInicial={3}></Contador>
            </Card> 
            <Card titulo="#10 - Formulário - Componente controlado" color="#E45F46">
                <Input></Input>
            </Card> 
            <Card titulo="#09 - Comunicação Indireta" color="#8BAD39">
                <IndiretaPai></IndiretaPai>
            </Card> 
            <Card titulo="#09 - Comunicação Direta" color="#59323C">
                <DiretaPai></DiretaPai>
            </Card> 
            <Card titulo="#08 - Par ou Impar" color="#982395">
                <ParOuImpar numero={21}></ParOuImpar>
                <UsuarioInfo usuario={{nome: 'Fernando'}}/>
                <UsuarioInfo usuario={{sobrenome: 'Lara'}}/>
            </Card> 
            <Card titulo="#07 - Tabela Produtos" color="#FF4C65">
                <TabelaProdutos></TabelaProdutos>
            </Card> 

            <Card titulo="#06 - Repetição" color="#FF4C65">
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

