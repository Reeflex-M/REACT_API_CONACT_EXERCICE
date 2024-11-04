import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <ul>
            <li>
            <Link to="/">Accueil</Link>
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/meccool">Meccool</Link>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
        </ul> 
    );
    }
