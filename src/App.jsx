import React from "react";

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro';
import Fragment from './components/basicos/Fragment';

export default _ => 
    <div id = "app">
        <h1> Fundamentos React </h1>
        <Fragment/>
        <ComParametro
            nome = "Karine"
            nota = "7"
        />
        <ComParametro
            nome = "Fernanda"
            nota = "5"
        />
        <Primeiro/>
    </div>

