import React, { useEffect, useState } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { getOneProduct } from '../../asynMock'
import {useParams} from 'react-router-dom'

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const [mensaje, setMensaje] = useState(0)

const {id}=useParams()


    useEffect(() => {
        getOneProduct(id)
        .then(res => setProducto(res))
        .finally(()=> setLoading(false))
    }, [])

if(loading){
    return(
        <h1>cargando...</h1>
    )
}

        return (
            <div>
                <ItemDetail producto={producto} />
                
            </div>
        )

    }
