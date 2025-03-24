import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemList from './components/ItemListContainer'

function App() {

  return (
    <div className="container mt-4">
      <NavBar></NavBar>
      <ItemList></ItemList>
    </div>   
  )
}

export default App
