import {Link} from 'react-router-dom'

import {
  HomePage,
  Nav,
  Content,
  MainHeading,
  RegisterSentence,
  RegisterBtn,
} from './styledComponent'
import RegisterContext from '../../context/RegisterContext'

const Home = () => (
  <RegisterContext.Consumer>
    {value => {
      const {name, topic} = value

      console.log(name)
      console.log(topic)

      return (
        <HomePage>
          <Nav>
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              alt="website logo"
            />
          </Nav>
          <Content>
            <MainHeading>Welcome to Meetup</MainHeading>
            <RegisterSentence className="register-sentence">
              Please register for the topic
            </RegisterSentence>
            <Link to="/register">
              <RegisterBtn type="button">Register</RegisterBtn>
            </Link>

            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </Content>
        </HomePage>
      )
    }}
  </RegisterContext.Consumer>
)

export default Home
