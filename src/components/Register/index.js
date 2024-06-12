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

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        name,
        changeName,
        changeTopic,
        showSubmitError,
        registerName,
        updateError,
      } = value

      const registerNow = event => {
        event.preventDefault()

        if (name === '') {
          updateError()
        } else {
          const {history} = props
          history.replace('/')
          registerName()
        }
      }

      return (
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

            <form className="FormContainer" onSubmit={registerNow}>
              <h1 className="form-heading">Let us join</h1>
              <label htmlFor="name">NAME</label>
              <input
                type="text"
                id="name"
                className="input-bar"
                onChange={event => changeName(event.target.value)}
              />
              <label htmlFor="topic">TOPICS</label>
              <select
                type="text"
                id="topic"
                className="input-bar"
                onChange={event => changeTopic(event.target.value)}
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
      )
    }}
  </RegisterContext.Consumer>
)

export default Register
