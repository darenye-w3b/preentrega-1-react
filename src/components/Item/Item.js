import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({id, name, img, price, stock}) => {

    return(
        <article>
            <header className="name">
                <h2>{name}</h2>
            </header>
            <picture className="contenedor-imagenes">
                <img src={img} alt={name} className="img"/>
            </picture>
            <div className="parrafo">
                <p>Precio: ${price}</p>
                <p>Stock Disponible: {stock}</p>
            </div>
            <footer>
                <Link to={`/item/${id}`} className="btn">Ver Detalle</Link>
            </footer>
        </article>
    )
}

export default Item 