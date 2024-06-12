import {Component} from 'react'

import {HomePage, Nav} from '../Home/styledComponent'

import './index.css'
import RegisterContext from '../../context/RegisterContext'

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

class Register extends Component {
  state = {
    name: '',
    topic: topicsList[0].displayText,
    showSubmitError: false,
  }

  getValue = event => {
    this.setState({name: event.target.value})
  }

  getTopic = event => {
    const topic = topicsList.filter(
      eachTopic => eachTopic.id === event.target.value,
    )

    this.setState({topic: topic[0].displayText})
  }

  registerNow = event => {
    event.preventDefault()
    const {name} = this.state

    if (name === '') {
      this.setState({showSubmitError: true})
    } else {
      const {history} = this.props

      history.replace('/')
    }
  }

  render() {
    const {name, topic, showSubmitError} = this.state

    return (
      <RegisterContext.Provider value={{nameX: name, topicX: topic}}>
        <HomePage>
          <Nav>
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              alt="website logo"
            />
          </Nav>
          <div className="RegisterContent">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
            </div>

            <form className="FormContainer" onSubmit={this.registerNow}>
              <h1 className="form-heading">Let us join</h1>
              <label htmlFor="name">NAME</label>
              <input
                type="text"
                id="name"
                className="input-bar"
                value={name}
                onChange={this.getValue}
              />
              <label htmlFor="topic">TOPICS</label>
              <select
                type="text"
                id="topic"
                className="input-bar"
                onChange={this.getTopic}
              >
                {topicsList.map(each => (
                  <option key={each.id} value={each.id}>
                    {each.displayText}
                  </option>
                ))}
              </select>

              <button type="submit" className="RegisterNowBtn">
                Register Now
              </button>
              {showSubmitError && (
                <p className="ErrorMsg">Please enter your name</p>
              )}
            </form>
          </div>
        </HomePage>
      </RegisterContext.Provider>
    )
  }
}

export default Register
