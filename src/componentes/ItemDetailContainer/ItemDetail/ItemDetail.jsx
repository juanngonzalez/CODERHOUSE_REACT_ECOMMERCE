import React, { useContext } from 'react'
import { ContextCart } from '../../../context/ContextCart'
import {useCartContext} from '../../../context/ContextCart'
import { Card,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Contador from '../Contador/Contador';
import { useState } from 'react';



function ItemDetail({producto}) {

  const {agregarAlCarrito} = useCartContext()
    
  const [show, setShow] = useState(true)
    
    const onAdd = (cantidad) => {
      setShow(false)
      agregarAlCarrito({...producto, cant: cantidad})
    }
    
    return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <Card style={{ width: '18rem', margin:"15px", marginTop:"100px" }}>
      <Card.Img style={{width:"18rem"}} src={producto.imagenUrl} />
      <Card.Body>
        <Card.Title>{producto.name}</Card.Title>
        <Card.Text>
          Precio: {producto.price}
          <br></br>
          Duracion: {producto.duracion}
          <br></br>
          Nivel: {producto.category}
        </Card.Text>
      </Card.Body>
      </Card>
      {show ? <Contador initial={1} max={10} onAdd={onAdd}/> : 
      <div>
        <Link to='/cart'><Button className='agregar'>Terminar la compra</Button></Link>
        <Link to='/'><Button>Seguir comprando</Button></Link>
      </div>}
    </div>
    )
}

export default ItemDetail
