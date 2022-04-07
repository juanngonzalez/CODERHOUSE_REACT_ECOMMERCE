
import { BrowserRouter as Ruta, Routes, Route } from 'react-router-dom'
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from '../src/componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Cart from './componentes/Cart/Cart';
import { CartContextProvider } from './context/ContextCart';

function App() {
  const greeting = "BIENVENIDO A CODERSPACE"
  return (
  <CartContextProvider>
  <Ruta>
      <NavBar />
        <Routes>
          <Route exact path='/' element={<div className='App'><ItemListContainer greeting={greeting} /></div>} />
          <Route exact path='/categoria/:idCategoria' element={<div className='App'><ItemListContainer greeting={greeting} /></div>} />
          <Route exact path='/detalle/:idDetalle' element={<ItemDetailContainer/>} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes> 
  </Ruta>
  </CartContextProvider>
  
  );
}

export default App;
