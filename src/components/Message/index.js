// Write your code here
const Message = props => {
  const {isLoggedIn} = props

  if (isLoggedIn === true) {
    return <h1>Welcome User</h1>
  }
  return <h1>PLease Login</h1>
}

export default Message
