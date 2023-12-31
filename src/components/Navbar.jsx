
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <div>
        <h1>MyStore.com</h1>
      </div>
      <div className="navbar-section">
        <Link to='/'><h1>Home</h1></Link>
        <Link to='/create'><h1>Add Product</h1></Link>
      </div>
      <div className="navbar-section">
        <h1>Administrator/<span className="alert">Log out</span></h1>
      </div>
    </div>
  );
};
