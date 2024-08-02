
import './App.css'
import { ItemDetail } from './componentes/ItemDetail/ItemDetail'
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/NavBar/NavBar'
import {BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>

      <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainertemListContainer />} />
          <Route path='/categoria/cat' element={<ItemListContainertemListContainer />} />
          <Route path='/detalle/:id' element={<ItemListDetailContainer />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
