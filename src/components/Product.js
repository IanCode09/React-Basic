import React from 'react'

const Product = props => {
    console.log(props);
    return (
        <div className='shoes'>
            <img src={props.shoes} alt="shoes" style={{width:'100%'}} />
            <div className="container">
                <h4><b>{props.nameProduct}</b></h4> 
                <p>{props.price}</p> 
                {props.children}
            </div>
        </div>
    )
}

export default Product
