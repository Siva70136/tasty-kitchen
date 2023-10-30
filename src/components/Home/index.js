import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {BsChevronRight, BsChevronLeft} from 'react-icons/bs'
import {HiOutlineMenuAlt2} from 'react-icons/hi'
import Cookies from 'js-cookie'
import websiteLogo from '../../assets/websiteLogo.png'
import NavBar from '../NavBar'
import Footer from '../Footer'
import Carousel from '../Carousel'
import rating from '../../assets/rating.png'

import './index.css'

const sortByOptions = [
  {
    id: 0,
    displayText: 'Highest',
    value: 'Highest',
  },
  {
    id: 2,
    displayText: 'Lowest',
    value: 'Lowest',
  },
]

const Home = props => {
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [sort, setSort] = useState(sortByOptions[0].value)
  const [load, setLoad] = useState(false)
  const token = Cookies.get('jwt_token')
  const itemsPerPage = 9

  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const getInfo = async () => {
    setLoad(true)
    const response = await fetch(
      `https://apis.ccbp.in/restaurants-list?offset=${0}&limit=${30}&sort_by_rating=${sort}`,
      options,
    )
    if (response.ok) {
      const d = await response.json()
      // console.log(d.restaurants)
      const info = d.restaurants.map(each => ({
        id: each.id,
        name: each.name,
        image: each.image_url,
        rating: each.user_rating.rating,
        totalReviews: each.user_rating.total_reviews,
      }))

      // info.map(each => console.log(each.rating))

      setData(info)
      setLoad(false)
    } else {
      setLoad(true)
    }
  }

  useEffect(() => {
    getInfo()
  }, [])

  // ================= pagination ==========
  const totalPages = Math.ceil(data.length / itemsPerPage)

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  let itemsToDisplay = []
  if (data.length > 0) {
    itemsToDisplay = data.slice(startIndex, endIndex)
  }
  const {history} = props
  const onLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div className="home-container">
      <div className="">
        <div className="navbar-container">
          <div className="navbar">
            <div className="logo-container">
              <Link to="/">
                <img src={websiteLogo} alt="website logo" className="logo" />
              </Link>
              <h1 className="logo-text">Tasty Kitchens</h1>
            </div>
            <ul className="features-container">
              <Link to="/">
                <li className="nav-item">Home</li>
              </Link>
              <Link to="/cart">
                <li className="nav-item nav-item1">Cart</li>
              </Link>
              <li className="button1">
                <button
                  type="button"
                  className="logout button"
                  onClick={onLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="">
        <Carousel />
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
        <div className="home-data-container">
          <h1 className="home-head">Popular Restaurants</h1>
          <div className="second">
            <p className="home-desc">
              Select Your favourite restaurant special dish and make your day
              happy...
            </p>
            <div className="sort-container">
              <HiOutlineMenuAlt2 />
              <select onChange={e => setSort(e.target.value)} className="sort">
                <option>Sort by Lowest</option>
                {sortByOptions.map(each => (
                  <option key={each.id}>{each.displayText}</option>
                ))}
              </select>
            </div>
          </div>
          <hr className="line" />
          <ul className="restaurants-list">
            {itemsToDisplay.map(each => (
              <Link
                to={`restaurant/${each.id}`}
                key={each.id}
                className="c"
                testid="restaurant-item"
              >
                <li className="restaurant-card">
                  <img
                    src={each.image}
                    className="restaurant-image"
                    alt="restaurant"
                  />
                  <div className="data-container">
                    <h1 className="name1">{each.name}</h1>
                    <p className="tag">Fast Food</p>
                    <div className="rating-container">
                      <img src={rating} alt="rating" className="rating-image" />
                      <p className="">
                        {each.rating} &nbsp;{' '}
                        <span className="total">({each.totalReviews})</span>
                      </p>
                    </div>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
          <div className="pagination">
            <button
              type="button"
              className="nav"
              onClick={goToPreviousPage}
              data-testid="pagination-right-button"
            >
              <BsChevronLeft />
            </button>
            <span className="page" data-testid="active-page-number">
              {currentPage} of {totalPages}
            </span>
            <button
              className="nav"
              type="button"
              data-testid="pagination-left-button"
              onClick={goToNextPage}
            >
              <BsChevronRight />
            </button>
          </div>
        </div>
      )}
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
