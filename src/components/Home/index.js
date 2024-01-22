import {Component} from 'react'
import {Link} from 'react-router-dom'
import {
  BackgroundContainer,
  NavContainer,
  BelowContainer,
  Heading,
  Description,
  Button,
} from './Styled'

class Home extends Component {
  state = {isTrue: false}

  register = () => {
    const {history} = this.props
    history.replace('/register')
  }

  renderingBeforeRegister = () => (
    <BackgroundContainer>
      <NavContainer>
        <img
          src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
          alt="website logo"
        />
      </NavContainer>
      <BelowContainer>
        <Heading>Welcome to meetup</Heading>
        <Description>Please register for the topic</Description>
        <Link to="/register">
          <Button onClick={this.register}>Register</Button>
        </Link>
        <img
          src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
          alt="meetup"
          width={700}
        />
      </BelowContainer>
    </BackgroundContainer>
  )

  render() {
    const {isTrue} = this.state
    const {location} = this.props
    const {state} = location
    console.log(state)
    return (
      <>
        {isTrue ? (
          <>
            <BackgroundContainer>
              <NavContainer>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                  alt="website logo"
                />
              </NavContainer>
              <BelowContainer>
                <Heading>Hello {state.name}</Heading>
                <Description>Welcome to {state.selectItem}</Description>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                  width={700}
                />
              </BelowContainer>
            </BackgroundContainer>
          </>
        ) : (
          <>{this.renderingBeforeRegister()}</>
        )}
      </>
    )
  }
}
export default Home
