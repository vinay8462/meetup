import {Switch, Route, Redirect} from 'react-router-dom'

import './App.css'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Register from './components/Register'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
