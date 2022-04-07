import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../helpers/mock'
import ItemDetail from '../ItemDetailContainer/ItemDetail/ItemDetail'
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'

function ItemDetailContainer() {
    const [producto, setProducto] = useState({})
    const {idDetalle} = useParams()
    useEffect(()=>{
        const db = getFirestore()
    
        const queryProd = doc(db, 'items', idDetalle)
        getDoc(queryProd)
        .then(resp => setProducto({ id: resp.id, ...resp.data() }))

        //     getFetch
    //     .then(resp => setProducto(resp.find(prod => prod.id === idDetalle)))
    },[])
    return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    )
}

export default ItemDetailContainer
