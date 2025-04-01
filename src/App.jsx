import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemList from './components/ItemListContainer'

function App() {

  return (
    <div className="container mt-4">
      <NavBar></NavBar>
      <ItemList text="¡Bienvenidos! a la mejor Tienda Online de Tecnología"></ItemList>
    </div>   
  )
}

export default App
