import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const Carousel = () => {
  const [data, setData] = useState([])
  const [load, setLoad] = useState(false)
  const token = Cookies.get('jwt_token')
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    centerPadding: '10px',
  }

  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const getData = async () => {
    setLoad(true)
    const response = await fetch(
      'https://apis.ccbp.in/restaurants-list/offers',
      options,
    )
    if (response.ok) {
      const d = await response.json()

      setData(d.offers)
      setLoad(false)
    } else {
      setLoad(true)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="container1">
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
        <Slider {...settings}>
          {data.map(each => (
            <li key={each.id} className="carousel-card">
              <img
                src={each.image_url}
                alt="thumbnail"
                className="carousel-image"
              />
            </li>
          ))}
        </Slider>
      )}
    </div>
  )
}

export default Carousel
