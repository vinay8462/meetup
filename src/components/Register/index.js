import {Component} from 'react'
import {
  NavContainer,
  BelowContainer,
  Bgcontainer,
  Form,
  FormHeading,
  Label,
  Input,
  Select,
  Option,
  Button,
  Image,
} from './Styled'

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
    selectItem: topicsList[0].id,
    name: '',
    object: {},
    active: false,
  }

  onSelectItem = event => {
    this.setState({selectItem: event.target.value})
  }

  onSearchName = event => {
    this.setState({name: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {name, selectItem} = this.state
    if (name === '') {
      this.setState({active: true})
    } else {
      const addDetails = {
        name,
        selectItem,
      }
      this.setState({
        object: addDetails,
        name: '',
        selectItem: topicsList[0].id,
      })
    }
    const {history} = this.props
    history.replace('/')
    history.push('/', this.state)
  }

  render() {
    const {selectItem, name, active, object} = this.state
    console.log(object)
    return (
      <Bgcontainer>
        <NavContainer>
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt="website logo"
          />
        </NavContainer>
        <BelowContainer>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
            alt="website register"
          />
          <Form onSubmit={this.onSubmitForm}>
            <FormHeading>Let us join</FormHeading>
            <Label htmlFor="name">NAME</Label>
            <Input
              type="text"
              id="name"
              placeholder="Your name"
              onChange={this.onSearchName}
              value={name}
            />
            <Label htmlFor="topic">TOPIC</Label>
            <Select id="topic" value={selectItem} onChange={this.onSelectItem}>
              {topicsList.map(each => (
                <Option value={each.id} key={each.id}>
                  {each.displayText}
                </Option>
              ))}
            </Select>
            <Button type="submit">Register Now</Button>
            {active && <p>Please enter your name</p>}
          </Form>
        </BelowContainer>
      </Bgcontainer>
    )
  }
}

export default Register
