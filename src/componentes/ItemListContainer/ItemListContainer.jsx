import React from 'react'
import { getFetch } from '../../helpers/mock'
import Contador from '../ItemDetailContainer/Contador/Contador'
import { useState, useEffect } from 'react'
import ItemList from './ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'
import '../ItemListContainer/ItemListContainer.css'
import {Spinner} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'




function ItemListContainer({greeting}) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {idCategoria} = useParams()
    useEffect(() => {

      const db = getFirestore()

      // const queryProd = doc(db, 'items', 'bs1CJNP9z9lBC2w6JFmx')
      // getDoc(queryProd)
      // .then(resp => setProductos({ id: resp.id, ...resp.data() }))



      // const queryCollection = query(collection(db, 'items'), //where('price', '==', 9000)
      // )
      // getDocs(queryCollection)
      // .then(res => setProductos(res.docs.map(prod => ({ id: prod.id,...prod.data() }))))
      // .catch(err => err)
      // .finally(() => setLoading(false))
      
      if (idCategoria) {
        const queryCollection = query(collection(db, 'items'), where('category', '==', idCategoria)
      )
      getDocs(queryCollection)
      .then(res => setProductos(res.docs.map(prod => ({ id: prod.id,...prod.data() }))))
      .catch(err => err)
      .finally(() => setLoading(false))
        
     }else{
      const queryCollection = query(collection(db, 'items'), //where('price', '==', 9000)
      )
      getDocs(queryCollection)
      .then(res => setProductos(res.docs.map(prod => ({ id: prod.id,...prod.data() }))))
      .catch(err => err)
      .finally(() => setLoading(false))
        
      }
        
    }, [idCategoria])
    return (
        <div style={{marginTop:"100px"}}>
          <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <p className='tituloPrincipal'>{greeting}</p>
          </div>
          { loading ? <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}><h2>Cargando productos..</h2><Spinner/></div>
          :
          <div>
          <ItemList productos={productos}/>
          </div>
          }  
            
            
        </div>
    )
}

export default ItemListContainer
