import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const Carousel = () => {
  const [data, setData] = useState([])
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
    console.log(options)
    const response = await fetch(
      'https://apis.ccbp.in/restaurants-list/offers',
      options,
    )
    const d = await response.json()
    console.log(d.offers)
    setData(d.offers)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="container1">
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
    </div>
  )
}

export default Carousel
