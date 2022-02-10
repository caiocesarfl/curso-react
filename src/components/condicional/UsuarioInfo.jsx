import React from "react";
import If from './If'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const usuario = props.usuario || {};

    return (
        <div>
            <If test={usuario && usuario.nome}>
                Seja Bem vindo {usuario.nome}!
            </If>
            <If test={!usuario || !usuario.nome}>
                Seja Bem vindo!
            </If>
        </div>
    )
}