import {Link} from 'react-router-dom'
import error from '../../assets/error.png'
import './index.css'

const NotFound = () => {
  console.log('hi')

  return (
    <div className="main-container">
      <div className="app-container">
        <div className="error-container">
          <img src={error} alt="not found" className="error" />
        </div>
        <div className="text-container">
          <h1 className="error-head">Page Not Found</h1>
          <p className="error-desc">
            We are sorry, the page you requested could not be found. Please go
            back to the homepage
          </p>
          <Link to="/">
            <button type="button" className="home-button button">
              Home Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
