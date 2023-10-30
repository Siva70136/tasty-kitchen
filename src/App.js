import {Route, Switch, BrowserRouter} from 'react-router-dom'
import {useState} from 'react'
import Cookies from 'js-cookie'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Login from './components/Login'
import RestaurantPage from './components/RestaruantPage'
import Cart from './components/Cart'
import Payment from './components/Payment'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'
import TastyContext from './context'

const App = () => {
  const [cartList, setCartList] = useState([])

  const deleteCartItem = id => {
    const updateData = cartList.filter(each => each[0].id !== id)
    setCartList(updateData)
  }

  const addCartItem = product => {
    setCartList([...cartList, product])
  }

  const removeAllCartItems = () => {
    setCartList([])
  }

  const incrementCartItemQuantity = id => {
    const updatedData = cartList.map(each => {
      if (each.id === id) {
        const updateData = each.quantity + 1
        return {...each, quantity: updateData}
      }
      return each
    })
    setCartList(updatedData)
  }

  const decrementCartItemQuantity = id => {
    const updatedData = cartList.find(each => each.id === id)

    if (updatedData.quantity > 1) {
      const data = cartList.map(each => {
        if (each.id === id) {
          const updateData = each.quantity - 1
          return {...each, quantity: updateData}
        }
        return each
      })
      setCartList(data)
    } else {
      deleteCartItem(id)
    }
  }
  return (
    <BrowserRouter>
      <TastyContext.Provider
        value={{
          cartList,
          addCartItem,
          deleteCartItem,
          removeAllCartItems,
          incrementCartItemQuantity,
          decrementCartItemQuantity,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/restaurant/:id"
            component={RestaurantPage}
          />
          <ProtectedRoute exact path="/payment" component={Payment} />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <Route component={NotFound} />
        </Switch>
      </TastyContext.Provider>
    </BrowserRouter>
  )
}

export default App
