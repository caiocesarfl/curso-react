import React from "react";
import produtos from '../../data/produtos.js'
import './layout/TabelaProdutos.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const tabelaProdutos = produtos.map((produto, index) => {
        return (
            <tr key ={produto.id} className = {index % 2 === 0 ? 'Par' : 'Impar'}>
                <td id="item">{produto.id}</td> 
                <td id="nome">{produto.nome}</td> 
                <td id="valor">R$ {produto.valor ? produto.valor.toFixed(2).replace('.',',') : '0,00' }</td>
            </tr>
        )
    })
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
            <tbody>
                {tabelaProdutos}
            </tbody>
            </table>
        </div>
    );
}