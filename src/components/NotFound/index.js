import {BgContainer, Heading, Para, Image} from './Styled'

const NotFound = () => (
  <BgContainer className="notFound-container">
    <Image
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <Heading>Page Not Found</Heading>
    <Para>We are sorry, the page you requested could not be found</Para>
  </BgContainer>
)

export default NotFound
