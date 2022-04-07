import {useState} from 'react'
import { Button } from 'react-bootstrap';
import '../Contador/Contador.css'

function Contador({initial, max, onAdd}) {
    const [count, setCount] = useState(initial);
    const handleCountMas=()=> {
        count < max ? setCount(prev => prev + 1) : alert("Stock maximo")
    }
    const handleCountMenos=()=> {
        count > initial ? setCount(prev => prev - 1) : alert("Minimo de compra")
    }
    const handleCountReset=()=> {
        count !== 0 ? setCount(initial) : alert("Ya no hay productos seleccionados")
    }
    
    return (
        <div>
            <p style={{display:"flex",flexDirection:"column",alignItems:"center"}}>{count}</p>
            <Button onClick={handleCountMenos}>-</Button>
            <Button className='agregar' onClick={() => onAdd(count)}>Agregar al carrito</Button>
            <Button onClick={handleCountMas}>+</Button>
            
        </div>
    )
}

export default Contador
