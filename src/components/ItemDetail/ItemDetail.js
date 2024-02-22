import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    return(
        <div> 
            <figure>
                <img src={img} alt={name} />
            </figure>
            <header>
                <h2>{name}</h2>
            </header>
            <section>
                <p>Categoria: {category}</p>
                <p>Descripción: {description}</p>
                <p>Precio: ${price}</p>
            </section>
            <footer>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad Agregada", quantity)}/>
            </footer>
        </div>
    )
}

export default ItemDetail 