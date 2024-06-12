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
      const {isRegister, name, topic} = value

      return (
        <HomePage>
          <Nav>
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              alt="website logo"
            />
          </Nav>
          <Content>
            {isRegister ? (
              <>
                <MainHeading>Hello {name}</MainHeading>
                <RegisterSentence className="register-sentence">
                  Welcome to {topic}
                </RegisterSentence>
              </>
            ) : (
              <>
                <MainHeading>Welcome to Meetup</MainHeading>
                <RegisterSentence className="register-sentence">
                  Please register for the topic
                </RegisterSentence>
                <Link to="/register">
                  <RegisterBtn type="button">Register</RegisterBtn>
                </Link>
              </>
            )}

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
