import React from "react";

const Product = (props) =>{
    return(
    <div>
        <p>product Name: {props.name}</p>
        <p>product Price: {props.price}</p>
        <p>{props.children}</p>
    </div>
    )
}

export default Product