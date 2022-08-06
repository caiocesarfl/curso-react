import React from "react";
import produtos from "../../data/produtos"

export default props => {
    const tab = produtos.map(produto => { 
        return (
            <tr key ={produto.id}>
                <th>{produto.id}</th>
                <th>{produto.nome}</th>
                <th>{produto.valor}</th>
            </tr>
        )
    });
    
    return (
        <div>
            <table>
            <tr>
                <th>Id</th>
                <th>Produto</th>
                <th>Preço</th>
            </tr>
            {tab}
            </table>    
        </div>
    )
}