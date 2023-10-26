import {useState} from 'react'
import Cookies from 'js-cookie'
import websiteLogo from '../../assets/websiteLogo.png'
import login from '../../assets/login.png'
import './index.css'

const Login = props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [visible, setVisible] = useState('password')
  const {history} = props

  const login1 = async e => {
    e.preventDefault()
    const formData = {username: email, password}

    const options = {
      method: 'POST',
      body: JSON.stringify(formData),
    }

    try {
      const response = await fetch('https://apis.ccbp.in/login', options)
      const data = await response.json()

      if (response.ok) {
        Cookies.set('jwt_token', data.jwt_token, {
          expires: 30,
          path: '/',
        })
        setErrorMsg('')
        history.push('/')
      } else {
        setErrorMsg(data.error_msg)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const showPassword = event => {
    const condition = event.target.checked

    if (condition === true) {
      setVisible('text')
    } else {
      setVisible('password')
    }
  }

  return (
    <div className="main1-container ">
      <div className="container">
        <div className="app1-container">
          <div className="login-container">
            <img src={websiteLogo} alt="website logo" className="logo" />
            <h1 className="logo-text">Tasty Kitchens</h1>
          </div>
          <div>
            <h1 className="textHead">Login</h1>
            <form id="addUserForm" className="form">
              <p className="left">USERNAME</p>
              <input
                type="text"
                name=""
                id="name"
                value={email}
                className="form-control input"
                placeholder=""
                onChange={e => setEmail(e.target.value)}
              />

              <p className="left">PASSWORD</p>
              <input
                type={visible}
                id="PWD"
                value={password}
                className="form-control input"
                placeholder=""
                onChange={e => setPassword(e.target.value)}
              />
              <div className="show-container">
                <input type="checkbox" id="show" onChange={showPassword} />
                <label htmlFor="show" className="input-label">
                  Show Password
                </label>
              </div>
              <p id="emailErrMsg" className="warning">
                {errorMsg}
              </p>

              <div className="button-container">
                <button
                  className="button login-btn"
                  type="submit"
                  onClick={login1}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="image-container">
          <img src={login} alt="login" className="login-image" />
        </div>
      </div>
    </div>
  )
}

export default Login
