import {Link} from 'react-router-dom'
import cook from '../../assets/cook.png'

const Empty = () => {
  console.log('hi')

  return (
    <div className="main-container">
      <div className="app-container">
        <div className="error-container">
          <img src={cook} alt="empty cart" className="error" />
        </div>
        <div className="text-container">
          <h1 className="error-head">No Order Yet!</h1>
          <p className="error-desc">
            Your cart is empty. Add something from the menu.
          </p>
          <Link to="/">
            <button type="button" className="home-button button">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Empty
