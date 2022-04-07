const productos = [
    {id: "1",foto: 'curso javascript.jpg', nombre: "Curso JS", categoria:'principiante', precio: 8000, duracion: '6 meses'},
    {id: "2",foto: './assets/curso curso con c.jpg', nombre: "Curso C", categoria:'avanzado', precio: 7000, duracion: '8 meses'},
    {id: "3",foto: './assets/curso de c++.jpg', nombre: "Curso C++", categoria:'avanzado', precio: 8000, duracion: '8 meses'},
    {id: "4",foto: '../assets/curso de react.png', nombre: "Curso React", categoria:'principiante', precio: 9000, duracion: '6 meses'},
    {id: "5",foto: 'assets/curso desarrollo web.jpg', nombre: "Curso Web", categoria:'principiante', precio: 7000, duracion: '4 meses'}
]
export const getFetch = new Promise ((resolve, reject) => {
    let condicion = true
    if(condicion){
        setTimeout (() => {
            resolve(productos)
        },2000)
    } else {
        reject('error')
    }   
})