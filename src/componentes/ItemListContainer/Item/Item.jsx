import React from 'react'
import { Card,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'


function Item({prod}) {
    return (
      <div>
      <Card style={{ width: '18rem', margin:'15px',border:'solid black 1px', borderRadius:'7px', boxShadow:'-10px 10px 20px -5px'}}>
      <Card.Img style={{height:'160px'}}src={prod.imagenUrl} />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
          Precio: {prod.price}
          <br></br>
          Duracion: {prod.duracion}
          <br></br>
          Nivel: {prod.category}
        </Card.Text>
        <Link to={`/detalle/${prod.id}`}>
          <Button>VER MAS</Button>
        </Link>
      </Card.Body>
      </Card>
      </div>
    )
}

export default Item
