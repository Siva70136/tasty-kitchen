import hat from '../../assets/hat.png'
import insta from '../../assets/insta.png'
import pintrest from '../../assets/pintrest.png'
import fb from '../../assets/fb.png'
import x from '../../assets/x.png'
import './index.css'

const Footer = () => (
  <div className="footer-container">
    <div className="footer-inner">
      <div className="logo-container">
        <img src={hat} alt="hat" className="logo" />
        <h1 className="footer-text">Tasty Kitchens</h1>
      </div>
      <p className="footer-desc">
        The only thing we are serious about is food. Contact us on
      </p>
      <div className="social-media-container">
        <img src={pintrest} alt="logo" className="social" />
        <img src={insta} alt="logo" className="social" />
        <img src={fb} alt="logo" className="social" />
        <img src={x} alt="logo" className="social" />
      </div>
    </div>
  </div>
)

export default Footer
