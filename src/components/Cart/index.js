import {Link} from 'react-router-dom'
import NavBar from '../NavBar'
import CartItem from '../CartItem'
import Empty from '../Empty'
import TastyContext from '../../context'

import './index.css'

const Cart = () => (
  <TastyContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0

      // console.log(cartList)

      const removeAll = () => {
        removeAllCartItems()
      }
      let total = 0

      cartList.forEach(each => {
        total += each[0].cost * 1
      })

      return (
        <>
          <NavBar />
          <div className="cart-container">
            {showEmptyView ? (
              <Empty />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <ul className="cart-list">
                  <button
                    type="button"
                    className="button1 remove"
                    onClick={removeAll}
                    data-testid="remove"
                  >
                    Remove all
                  </button>
                  {cartList.map(eachCartItem => (
                    <CartItem
                      key={eachCartItem.id}
                      cartItemDetails={eachCartItem}
                    />
                  ))}
                </ul>
                <div className="final">
                  <div className="order-container">
                    <h1>Order Total &nbsp; </h1>
                    <h1 className="cart-total-price">{total}/-</h1>
                  </div>
                  <Link to="/payment" className="place1">
                    <button className=" button place" type="button">
                      Place Order
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </>
      )
    }}
  </TastyContext.Consumer>
)
export default Cart
