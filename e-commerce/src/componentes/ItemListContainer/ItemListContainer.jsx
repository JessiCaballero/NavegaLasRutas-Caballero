import React, { useState, useEffect } from 'react'
import './ItemListContainer.css'
import { getProductus } from '../../asynMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({ greeting }) => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()

  const { cat } = useParams


  useEffect(() => {
    getProducts().then(res => setProductos(res.filter(e => e.categoria === cat))).finally(setLoading(false))
  })

  getProducts().then(res => setProductos(res)).finally(setLoading(false))
}, []


console.log(productos)
if (loading) {
    return (
      <h2>Cargando...</h2>
    )
  }
  if (error) {
    return (
      <h2>{error}</h2>
    )
  }

  return (
    <div>
      {
        productos.length > 0 &&
        <ItemList productos={productos} />
      }

    </div>
  )

export default ItemListContainer