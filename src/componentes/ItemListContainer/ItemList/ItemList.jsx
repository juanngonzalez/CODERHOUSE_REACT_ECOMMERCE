import React from 'react'
import { Card,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Item from '../Item/Item'
import '../Item/Item.css'

function ItemList({productos}) {
    return (
    <div className='responsiveCard'>
      {productos.map((prod) => 
                <Item key={prod.id} prod={prod}/> 
      )}
    </div>
  )
}

export default ItemList
