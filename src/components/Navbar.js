import { Link } from 'react-router-dom';
import './Components.css'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" >Product Manager</Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/add-product" className="navbar-link">Add Product</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;