const products = [
    {
        id: "1",
        name: "Not Dulce de Leche",
        price: "2.500",
        category: "dulces",
        img: "https://estilorganico.com/4478-large_default/not-dulce-de-leche-250g-notco-.jpg",
        stock: 23,
        description: "Dulce de leche"
    },
    {
        id: "2",
        name: "Jamón Vegano",
        price: "2.850",
        category: "embutidos",
        img: "https://cdnx.jumpseller.com/la-casa-del-queso/image/9181080/jamon-ahumado-vegusta-2020.jpg?1654017875",
        stock: 10,
        description: "Seitán"
    },
    {
        id: "3",
        name: "Not Queso Crema",
        price: "3.000",
        category: "quesos",
        img: "https://cdn2.notco.com/uploads/products/_640x640_fit_center-center_90_none/321610/NotCreamCheese_2023-08-22-162739_mbmj.webp",
        stock: 12,
        description: "Queso Vegano"
    },
    {
        id: "4",
        name: "Salchicha Not Hot Dog",
        price: "3.500",
        category: "embutidos",
        img: "https://manolofrutasyverduras.cl/images/stories/virtuemart/product/not%20hotdog.jpg",
        stock: 11,
        description: "Salchicha a base de plantas"
    },
    {
        id: "5",
        name: "Queso Vegano Quillayes",
        price: "3.800",
        category: "quesos",
        img: "https://unimarc.vtexassets.com/arquivos/ids/200774/000000000000645387-UN-01.jpg?v=637335403877400000",
        stock: 5,
        description: "Queso mantecoso a base de plantas"
    },
    {
        id: "6",
        name: "Brownie Vegano",
        price: "5.000",
        category: "dulces",
        img: "https://santaisabel.vtexassets.com/arquivos/ids/177097-280-280?width=280&height=280&aspect=true",
        stock: 10,
        description: "Brownie de chocolate a base de plantas"
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === category))
        }, 500)
    })
}
