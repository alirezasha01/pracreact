import React from "react";

// const Product = () =>{
//     return(
//         <div>
//             <h1>Product</h1>
//         </div>
//     )

// }

class Product extends React.Component{
    render(){
        const price = 10
        return(
        <div>
            <p>product Name: shampoo</p>
            <p>product Price: {price}</p>
        </div>
        )
    }
}

export default Product