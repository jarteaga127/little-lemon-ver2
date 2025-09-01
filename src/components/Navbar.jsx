import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav>
            <header>
                Little Lemon
            </header>
            <ul>
<li><Link to="/">Home</Link></li>
<li><Link to="/">About us</Link></li>
<li><Link to="/">Book a table</Link></li>
<li><Link to="/">Order online</Link></li>
<li><Link to="/">Login</Link></li>
<li><Link to="/">Sign up</Link></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;