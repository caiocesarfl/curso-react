import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const elseChild = props.children.find(child => child && child.type && child.type.name === 'Else')
    const ifChild = props.children.filter(child => child && child !== elseChild);

    if(props.test) 
        return ifChild;
    else if (elseChild)
        return elseChild;
    else 
        return false;
}

export const Else = props => props.children;