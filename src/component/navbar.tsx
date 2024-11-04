import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-6 justify-center">
                <li>
                    <Link 
                        to="/" 
                        className="text-white hover:text-gray-300 transition-colors duration-200"
                    >
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/about" 
                        className="text-white hover:text-gray-300 transition-colors duration-200"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/meccool" 
                        className="text-white hover:text-gray-300 transition-colors duration-200"
                    >
                        Meccool
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/contact" 
                        className="text-white hover:text-gray-300 transition-colors duration-200"
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
