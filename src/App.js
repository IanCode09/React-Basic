import React from 'react';
import './App.css';
import Card from './Card'

function App() {
  const Button = (
    <>
      <button className='btn btn-primary'>Profil</button>
      <button className='btn btn-secondary'>Portfolio</button>
    </>
  )

  return (
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
  );
}

export default App;
