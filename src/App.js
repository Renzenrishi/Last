import './App.css'

import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'

import Register from './components/Register'
import NotFound from './components/NotFound'
import RegisterContext from './context/RegisterContext'

const App = () => (
  <RegisterContext.Consumer>
    {value => {
      const {nameX, topicX} = value

      console.log(nameX)

      return (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      )
    }}
  </RegisterContext.Consumer>
)

export default App
