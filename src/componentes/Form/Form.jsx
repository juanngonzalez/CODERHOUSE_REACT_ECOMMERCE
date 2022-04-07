import React from 'react';
import { Button } from 'react-bootstrap'

function Form({realizarCompra, handleChange, dataForm}) {
  return (
    <div className='contenedorFormulario' >
    <form onSubmit={realizarCompra} onChange={handleChange} >
    <h3 style={{textAlign:"center"}}>COMPLETE LOS DATOS</h3>
        <input className="inputForm"
            type="text" 
            name="name"
            placeholder="name"
            value={dataForm.name}
        />
        <br/>
        <input 
            type="text" 
            name="phone"
            placeholder="tel"
            value={dataForm.phone}
        />
        <br/>
        <input
            type="email" 
            name="email"
            placeholder="email"
            value={dataForm.email}
        />
        <div className="centrado">
            <Button className="agregar" style={{border:'solid 1px black'}} onClick={realizarCompra}>COMPRAR</Button>
        </div>
    </form>
    </div>
  );
}

export default Form;
