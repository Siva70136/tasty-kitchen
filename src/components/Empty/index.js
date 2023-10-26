import cook from '../../assets/cook.png'

const Empty = () => {
  console.log('hi')

  return (
    <div className="main-container">
      <div className="app-container">
        <div className="error-container">
          <img src={cook} alt="error" className="error" />
        </div>
        <div className="text-container">
          <p className="error-head">No Orders Yet!</p>
          <p className="error-desc">
            Your cart is empty. Add something from the menu.
          </p>
          <button type="button" className="home-button button">
            Order Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Empty
