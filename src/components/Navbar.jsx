import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav>
            <header>
                Little Lemon
            </header>
            <ul>
                
<li><Link to="/" className="nav-link">Home</Link></li>
<li><Link to="/" className="nav-link">About us</Link></li>
<li><Link to="/booking-page" className="nav-link">Book a table</Link></li>
<li><Link to="/" className="nav-link">Order online</Link></li>
<li><Link to="/" className="nav-link">Login</Link></li>
<li><Link to="/" className="nav-link">Sign up</Link></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;