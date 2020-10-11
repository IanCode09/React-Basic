import React, { useState } from 'react';
import './App.css';
import Card from './components/Card'
import Product from './components/Product'

function App() {
  const [nameProduct, setNameProduct] = useState('No Name')

  const changeNameProductHandler = () => {
    setNameProduct('Air Jordan')
  }

  const Button = (
    <>
      <button className='btn btn-primary'>Profil</button>
      <button className='btn btn-secondary'>Portfolio</button>
    </>
  )

  return (
    <>
      <div className="App">
        <Card name='Ian Lombu' job='programmer' profil='../images/ian-profile.jpg'>
          {Button}
        </Card>

        <Card name='Fritz Saduk' job='CEO PT AWI' profil='../images/saduk-profile.jpg'>
          {Button}
        </Card>

        <Card name='Ramdan Nugraha' job='UI/UX PT AWI' profil='../images/ramdan-profile.jpg'>
          {Button}
        </Card>
      </div>

      <main>
        <Product nameProduct={nameProduct} price='$100' shoes='../images/nike.jpg'>
          <button className='btn btn-warning' onClick={changeNameProductHandler}>Change Name</button>
          <button className='btn btn-primary'>Add to Cart</button>
        </Product>
      </main>
    </>

    
  );
}

export default App;
