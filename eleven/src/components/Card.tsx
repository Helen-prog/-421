import React from "react";

export enum CardVariant{
    outlined = "outlined",
    primary = "primary"
}

interface CardProps{
    width: string;
    height: string;
    children?: React.ReactNode;
    variant: CardVariant;
    func: () => void;
}


function Card({width, height, children, variant, func}: CardProps){
    return(
        <div style={{width, height, margin: "20px",
        border: variant === CardVariant.outlined ? '2px solid red' : 'none',
        background: variant === CardVariant.primary ? 'yellow' : '' 
        }} onClick={func}>
            {children}
        </div>
    )
}

export default Card;