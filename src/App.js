import React, { useState } from 'react';
import './App.css';
import Card from './components/Card'
import Product from './components/Product'

function App() {
  const [nameProduct, setNameProduct] = useState('No Name')

  const [showCard, setShowCard] = useState(true)

  const changeNameProductHandler = (name) => setNameProduct(name)

  const toggleShowCard = () => setShowCard(!showCard)

  const changeInputHandler = event => setNameProduct(event.target.value)

  const cardsMarkup =  showCard && 
  <Product 
    nameProduct={nameProduct} 
    price='$100' 
    shoes='../images/nike.jpg'
    onChangeName={() => changeNameProductHandler('Air Jordan')}
    onChangeInput={changeInputHandler}
  >      
    <button className='btn btn-warning' onClick={() => changeNameProductHandler('ABAO')}>Change Name</button> 
  </Product>

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
        <button className='btn btn-primary' onClick={toggleShowCard}>Toggle Show/Hide</button>
            {cardsMarkup}
      </main>
    </>

    
  );
}

export default App;
