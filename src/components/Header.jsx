import "../assets/stylesheets/components-styles/Header.css"
import { NavLink } from "react-router-dom";
import { AiOutlineUser } from 'react-icons/ai'


function Header() {
    return (
        <nav>
            <img className="logo-type" src="src/assets/Images/Caduceus.svg" alt="Caduceus" />
            <div className="nav-links">
                <NavLink to="/" className="link">Inicio</NavLink>
                <NavLink to="/services" className="link">Servicios</NavLink>
                <NavLink to="/contact" className="link">Contáctanos</NavLink>
                <NavLink to="/login" className="link"><AiOutlineUser /></NavLink>
            </div>
        </nav>
    );
}

export default Header;