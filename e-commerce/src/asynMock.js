
const items = [
    {
        id: 1,
        nombre: "Mochila",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        precio: 2500,
        desc: "Modelo pantera",
        stock: 10,
        categoria: "Accesorios"
    },
    {
        id: 2,
        nombre: "Remera",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        precio: 2500,
        desc: "Modelo Cher",
        stock: 9,
        categoria: "Remeras"
    },
    {
        id: 3,
        nombre: "Campera",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        precio: 2500,
        desc: "Modelo Izzy",
        stock: 11,
        categoria: "Camperas"
    },
    {
        id: 4,
        nombre: "Aritos",
        image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        precio: 2500,
        desc: "Golden",
        stock: 11,
        categoria: "Accesorios"
    },


]

export const getProductus = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (false) {
                reject("todo mal")
            } else {
                resolve(items)
            }

        }, 1000)

    })

}

export const getOneProduct = (id) => {
    return new Promise((resolve, reject) => {
setTimeout(()=>{
    resolve(items.find(e=> e.id.toString() === id))
})
    },1000)

}