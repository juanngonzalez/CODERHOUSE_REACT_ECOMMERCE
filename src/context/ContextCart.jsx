import React, { createContext, useState, useContext, useEffect} from 'react'

//creacion del contexto
export const cartContext = createContext([])

export function useCartContext() {
    return useContext(cartContext)
}

//creacion del componente que maneja el contexto
export const CartContextProvider = ({children}) => {
    
    //estados y funciones globales
    const [cartList, setCartList] = useState([])
    

    
    const deleteItem = (id) => {
        const itemFiltrado = cartList.filter((producto) => producto.id !== id)
        setCartList(itemFiltrado);
    }

    function agregarAlCarrito(items) {
        const indice = cartList.findIndex(i => i.id === items.id)

        if (indice > -1) {
            const cantVieja = cartList[indice].cant

            let cantNueva = cantVieja + items.cant

            cartList[indice].cant = cantNueva

            let arrAux = [...cartList]

            setCartList(arrAux)

        } else {
            setCartList([...cartList, items])
        }
    }
    
    function vaciarCarrito() {
        setCartList([])
    }
    
    const total = () => {
        const totalCarrito = cartList.reduce((prev, current) => prev + current.price * current.cant, 0)
        return totalCarrito
    }
    const cantidadTotal = () => {
        const totalCarrito = cartList.reduce((prev, current) => prev + current.cant, 0)
        return totalCarrito
    }
    const eliminarUno = (id) => {
        const indice = cartList.findIndex(i => i.id === id)
        if(cartList[indice].cant > 1) {
            
        const cantVieja = cartList[indice].cant

        let cantNueva = cantVieja - 1

        cartList[indice].cant = cantNueva

        let arrAux = [...cartList]

        setCartList(arrAux)
        } else {
            alert("no es posible")
        }
    }
    const sumarUno = (id) => {

        const indice = cartList.findIndex(i => i.id === id)
        if(cartList[indice].cant <= 100) {
            
        const cantVieja = cartList[indice].cant

        let cantNueva = cantVieja + 1

        cartList[indice].cant = cantNueva

        let arrAux = [...cartList]

        setCartList(arrAux)
        } else {
            alert("no es posible")
        }
        
        
    }

    return(
        <cartContext.Provider value = {{
            cartList,
            agregarAlCarrito,
            vaciarCarrito,
            deleteItem,
            total,
            cantidadTotal,
            eliminarUno,
            sumarUno
        }}>
            {children}
        </cartContext.Provider>
    )
}
