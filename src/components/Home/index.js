// Write your code here
import {Component} from 'react'

import Message from '../Message'

import Login from '../Login'

import Logout from '../Logout'

class Home extends Component {
  state = {
    isLoggedIn: false,
  }

  onChange = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div>
        <div>
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Logout logout={this.onChange} />
          ) : (
            <Login login={this.onChange} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
