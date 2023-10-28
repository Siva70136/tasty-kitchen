import {Link} from 'react-router-dom'
import paymentSuccess from '../../assets/paymentSuccess.png'
import NavBar from '../NavBar'
import './index.css'

const Payment = () => (
  <div>
    <NavBar />
    <div className="main-container">
      <div className="app-container">
        <div className="error-container">
          <img src={paymentSuccess} alt="error" className="error" />
        </div>
        <div className="text-container">
          <p className="error-head">Payment Successful</p>
          <p className="payment-desc">
            Thank you for ordering Your payment is successfully completed.
          </p>
          <Link to="/">
            <button type="button" className="home-button button">
              Go To Home Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default Payment
