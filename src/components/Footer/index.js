import {
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'
import hat from '../../assets/hat.png'

import './index.css'

const Footer = () => (
  <div className="footer-container">
    <div className="footer-inner">
      <div className="logo-container">
        <img src={hat} alt="website-footer-logo" className="logo" />
        <h1 className="footer-text">Tasty Kitchens</h1>
      </div>
      <p className="footer-desc">
        The only thing we are serious about is food. Contact us on
      </p>
      <div className="social-media-container">
        <FaPinterestSquare testid="pintrest-social-icon" />
        <FaInstagram testid="instagram-social-icon" />
        <FaFacebookSquare testid="facebook-social-icon" />
        <FaTwitter testid="twitter-social-icon" />
      </div>
    </div>
  </div>
)

export default Footer
