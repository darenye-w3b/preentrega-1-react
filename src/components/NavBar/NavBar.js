import { NavLink, Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css";

const NavBar = () => {
    return(
        <nav className="hero is-success">
            <Link to="/">
                <h3 className="title">Vegetantes</h3>
            </Link>
            <div className="NavBar">
                <NavLink to={`/category/quesos`} className={({ isActive}) => isActive ? "ActiveOption" : "Option"}>Quesos</NavLink>
                <NavLink to={`/category/embutidos`} className={({ isActive}) => isActive ? "ActiveOption" : "Option"}>Embutidos</NavLink>
                <NavLink to={`/category/dulces`} className={({ isActive}) => isActive ? "ActiveOption" : "Option"}>Dulces</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar