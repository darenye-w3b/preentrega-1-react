import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav className="hero is-link">
            <h3 className="title">Vegetantes: Comida Vegana</h3>
            <div className="container buttons are-medium">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <button className="button is-primary is-light is-rounded">Quesos</button>
                        </div>
                        <div className="column is-4">
                            <button className="button is-primary is-light is-rounded">Embutidos</button>
                        </div>
                        <div className="column is-4">
                            <button className="button is-primary is-light is-rounded">Dulces</button>
                        </div>
                    </div>
                </section>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar