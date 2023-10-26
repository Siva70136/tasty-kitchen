import NavBar from '../NavBar'
import Footer from '../Footer'
import Carousel from '../Carousel'

const Home = () => {
  console.log('hi')
  return (
    <div className="home-container">
      <div className="">
        <NavBar />
      </div>
      <div className="">
        <Carousel />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
