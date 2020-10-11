import React from 'react'
import '../App.css'

const Product = props => {
    console.log(props);
    return (
        <div className='shoes'>
            <img src={props.shoes} alt="shoes" style={{width:'100%'}} />
            <div className="container">
                <h4><b>{props.nameProduct}</b></h4> 
                <input type='text' onChange={props.onChangeInput} value={props.nameProduct}></input>
                <p>{props.price}</p> 
                <p><button className='btn btn-warning-1' onClick={props.onChangeName}>Change Name</button></p>
                {props.children}
            </div>
        </div>
    )
}

export default Product
