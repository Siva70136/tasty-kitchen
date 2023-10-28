import {useState, useEffect} from 'react'
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import Loader from 'react-loader-spinner'
import {AiFillCloseCircle} from 'react-icons/ai'
import Cookies from 'js-cookie'
import NavBar from '../NavBar'
import Footer from '../Footer'
import rating from '../../assets/rating.png'
import TastyContext from '../../context'

import './index.css'

const RestaurantPage = props => {
  const [data, setData] = useState([])
  const [quantity, setQuantity] = useState(1)
  const [load, setLoad] = useState(false)

  const token = Cookies.get('jwt_token')
  const {match} = props
  const {id} = match.params

  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const getInfo = async () => {
    setLoad(true)
    const response = await fetch(
      `https://apis.ccbp.in/restaurants-list/${id}`,
      options,
    )
    if (response.ok) {
      const d = await response.json()

      const info = {
        name: d.name,
        cuisine: d.cuisine,
        price: d.cost_for_two,
        location: d.location,
        image: d.image_url,
        rating: d.rating,
        totalReviews: d.reviews_count,
        items: d.food_items,
      }
      // console.log(info)
      setData([info])
      setLoad(false)
    } else {
      setLoad(true)
    }
  }

  const onDecrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevCount => prevCount - 1)
    }
  }

  const onIncrementQuantity = () => {
    setQuantity(prevCount => prevCount + 1)
  }

  useEffect(() => {
    getInfo()
  }, [])

  return (
    <TastyContext.Consumer>
      {value => {
        const {addCartItem, cartList} = value
        // console.log(productData)

        const onClickAddToCart = id1 => {
          const item = data[0].items.filter(each => {
            if (each.id === id1) {
              return true
            }
            return false
          })

          addCartItem(item)
        }
        return (
          <div className="home-container">
            <div className="">
              <NavBar />
            </div>
            {load ? (
              <div className="loader-container" data-testid="loader">
                <Loader
                  type="Oval"
                  color="#f7931e"
                  height="50"
                  width="50"
                  strokeWidth={200}
                />
              </div>
            ) : (
              <div>
                {data.length > 0 && (
                  <ul className="restaurants-list">
                    {data[0].items.map(each => (
                      <li className="food-card" key={each.id}>
                        <img
                          src={each.image_url}
                          className="food-image"
                          alt="restaurant"
                        />
                        <div className="data1-container">
                          <h1 className="name1">{each.name}</h1>
                          <p className="ta">${each.cost}</p>
                          <div className="quantity-container">
                            <button
                              type="button"
                              className="quantity-controller-button"
                              onClick={onDecrementQuantity}
                            >
                              <BsDashSquare className="quantity-controller-icon" />
                            </button>
                            <p className="quantity">{quantity}</p>
                            <button
                              type="button"
                              className="quantity-controller-button"
                              onClick={onIncrementQuantity}
                            >
                              <BsPlusSquare className="quantity-controller-icon" />
                            </button>
                          </div>
                          <div className="rating-container">
                            <img
                              src={rating}
                              alt="rating"
                              className="rating-image"
                            />
                            <p className="">{each.rating}</p>
                          </div>
                          <button
                            className="button add"
                            type="button"
                            onClick={() => onClickAddToCart(each.id)}
                          >
                            ADD
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
            <div>
              <Footer />
            </div>
          </div>
        )
      }}
    </TastyContext.Consumer>
  )
}

export default RestaurantPage
