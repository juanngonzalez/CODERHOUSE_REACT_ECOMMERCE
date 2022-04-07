import { useCartContext } from "../../context/ContextCart"
import { Card,Button } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { addDoc, collection, doc, documentId, getDoc, getDocs, getFirestore, updateDoc, writeBatch } from 'firebase/firestore'
import { useState } from "react"
import '../../componentes/ItemListContainer/Item/Item.css'
import Form from "../Form/Form"


function Cart() {
    
    const { cartList, vaciarCarrito, deleteItem, total, eliminarUno, sumarUno } = useCartContext()
    const [condicional, setCondicional] = useState(false);
    const [dataForm, setDataForm] = useState({
        email:'',
        name:'',
        phone:''
    })
    const realizarCompra = async (e) => {
        e.preventDefault()
        let orden = {}

        orden.buyer = dataForm
        orden.total = total()

        orden.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.name;
            const precio = cartItem.price * cartItem.cant;

            return {id,nombre,precio}
        })
        //guardar orden
        const db = getFirestore()
        const ordenCollection = collection(db,'ordenes')
        await addDoc(ordenCollection, orden)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        .finally(() => console.log('cargando'))

        //actualizar stock
        const queryCollection = collection(db, 'items')
        const queryActualizarStock = query (
            queryCollection, where( documentId(),'in',cartList.map(it => it.id))
        )
        const batch = writeBatch(db)
        
        await getDocs(queryActualizarStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
            stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
            })
        ))
        .catch(err => console.log(err))
        .finally(() => console.log('stock actualizado'))
        
        batch.commit()
        



        // const orderDoc = doc(db,'items','bs1CJNP9z9lBC2w6JFmx')
        // updateDoc(orderDoc,{
        //     stock: 99
        // })
    }
    const verFormulario = () => {
        setCondicional(true)
    }

    const handleChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="contenedorCart">
            <h3 style={{marginTop:"100px", textAlign:"center"}}>Carrito</h3>
            <div className="responsiveCard">
            {cartList.map(prod => 
            <Card key={prod.id} style={{ width: '18rem', margin:'15px',border:'solid black 1px', borderRadius:'7px', boxShadow:'-10px 10px 20px -5px'}}>
                <Card.Img style={{height:'160px'}} src={prod.imagenUrl} />
                    <Card.Body>
                        <Card.Title>{prod.name}</Card.Title>
                        <Card.Text>
                            Cantidad: {prod.cant}
                            <br></br>
                            Precio: {prod.price} Total: {prod.price * prod.cant}
                        </Card.Text>
                </Card.Body>
                <Button className='eliminar' onClick={() => deleteItem(prod.id)}>ELIMINAR PRODUCTO</Button>
                <Button onClick={() => sumarUno(prod.id)}>+</Button>
                <Button onClick={() => eliminarUno(prod.id)}>-</Button>
            </Card> )}
            </div>
            
            {
            cartList.length === 0 ? <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}><div><p>vuelva al inicio para comprar</p></div><Link to='/'><Button>Volver al inicio</Button></Link></div>
                :
                <div>
                    <p className="totalCarrito">{total()}</p>
                    <Button className="eliminar" onClick={vaciarCarrito}>Vaciar Carrito</Button>
                    <Form realizarCompra={realizarCompra} handleChange={handleChange} dataForm={dataForm}/>
                    
                </div>
            }
            
        </div>
    )
}

export default Cart
