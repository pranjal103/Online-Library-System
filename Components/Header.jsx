import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Header() {
  // const cartItems = useSelector((store) => store.cart.items);  
  return (
    <div className="header">
            <ul className="ul">
            <Link to={'/'}>
                    <li>Home</li>
                </Link>
                <Link to={'/books'}>
                    <li>Browse Books</li>
                </Link>
                <Link to={'/add-book'}>
                    <li>Add Books</li>
                </Link>
                
            </ul>
    </div>
  );
}

export default Header;