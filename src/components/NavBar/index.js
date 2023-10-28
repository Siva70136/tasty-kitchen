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
          <img src={websiteLogo} alt="website logo" className="logo" />
          <h1 className="logo-text">Tasty Kitchens</h1>
        </div>
        <div className="features-container">
          <Link to="/">
            <p className="nav-item">Home</p>
          </Link>
          <Link to="/cart">
            <p className="nav-item nav-item1">Cart</p>
          </Link>
          <div className="button1">
            <button type="button" className="logout button" onClick={onLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
