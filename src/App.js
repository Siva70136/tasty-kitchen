import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Payment from './components/Payment'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

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

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
