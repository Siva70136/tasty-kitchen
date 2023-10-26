import error from '../../assets/error.png'
import './index.css'

const NotFound = () => {
  console.log('hi')

  return (
    <div className="main-container">
      <div className="app-container">
        <div className="error-container">
          <img src={error} alt="error" className="error" />
        </div>
        <div className="text-container">
          <p className="error-head">Page Not Found</p>
          <p className="error-desc">
            We are sorry, the page you requested could not be found. Please go
            back to the homepage
          </p>
          <button type="button" className="home-button button">
            Home Page
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotFound
