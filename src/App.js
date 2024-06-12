import './App.css'

import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'

import Register from './components/Register'
import NotFound from './components/NotFound'
import RegisterContext from './context/RegisterContext'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class App extends Component {
  state = {
    name: '',
    topic: topicsList[0].displayText,
    showSubmitError: false,
    isRegister: false,
  }

  changeName = name => {
    this.setState({name})
  }

  changeTopic = id => {
    const getDisplayText = topicsList.filter(each => each.id === id)
    this.setState({topic: getDisplayText[0].displayText})
  }

  updateError = () => {
    this.setState({showSubmitError: true})
  }

  registerName = () => {
    this.setState({isRegister: true})
  }

  render() {
    const {name, topic, showSubmitError, isRegister} = this.state

    return (
      <RegisterContext.Provider
        value={{
          name,
          topic,
          showSubmitError,
          isRegister,
          changeName: this.changeName,
          changeTopic: this.changeTopic,
          updateError: this.updateError,
          registerName: this.registerName,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
