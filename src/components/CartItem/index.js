import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'

import TastyContext from '../../context'

import './index.css'

const CartItem = props => (
  <TastyContext.Consumer>
    {value => {
      const {
        deleteCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      } = value
      const {cartItemDetails} = props

      const data = {
        name: cartItemDetails[0].name,
        id: cartItemDetails[0].id,
        imageUrl: cartItemDetails[0].image_url,
        cost: cartItemDetails[0].cost,
      }
      const {name, id, cost, imageUrl} = data

      const onRemoveCartItem = () => {
        deleteCartItem(id)
      }

      const increase = () => {
        incrementCartItemQuantity(id)
      }

      const decrease = () => {
        decrementCartItemQuantity(id)
      }
      // TODO: Update the functionality to increment and decrement quantity of the cart item

      return (
        <li className="cart-item">
          <img className="cart-product-image" src={imageUrl} alt={name} />
          <div className="cart-item-details-container">
            <div className="cart-product-title-brand-container">
              <p className="cart-product-title">{name}</p>
            </div>
            <div className="cart-quantity-container">
              <button
                type="button"
                className="quantity-controller-button"
                data-testid="minus"
                onClick={decrease}
              >
                <BsDashSquare color="#52606D" size={12} />
              </button>
              <p className="cart-quantity">1</p>
              <button
                type="button"
                className="quantity-controller-button"
                data-testid="plus"
                onClick={increase}
              >
                <BsPlusSquare color="#52606D" size={12} />
              </button>
            </div>
            <div className="total-price-remove-container">
              <p className="cart-total-price">Rs {cost}/-</p>
              <button
                className="remove-button"
                type="button"
                onClick={onRemoveCartItem}
              >
                Remove
              </button>
            </div>
          </div>
          <button
            className="delete-button"
            type="button"
            onClick={onRemoveCartItem}
          >
            <AiFillCloseCircle color="#616E7C" size={20} />
          </button>
        </li>
      )
    }}
  </TastyContext.Consumer>
)

export default CartItem
