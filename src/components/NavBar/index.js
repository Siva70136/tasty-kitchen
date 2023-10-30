import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import websiteLogo from '../../assets/websiteLogo.png'

import './index.css'

const NavBar = props => {
  const {history} = props
  const onLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="logo-container">
          <Link to="/">
            <img src={websiteLogo} alt="website logo" className="logo" />
          </Link>
          <h1 className="logo-text">Tasty Kitchens</h1>
        </div>
        <ul className="features-container">
          <Link to="/">
            <li className="nav-item">Home</li>
          </Link>
          <Link to="/cart">
            <li className="nav-item nav-item1">Cart</li>
          </Link>
          <li className="button1">
            <button type="button" className="logout button" onClick={onLogout}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
