import './Login.css'
import LoginForm from 'components/LoginForm'

class Login extends React.Component {
  render () {
    return (
      <div className='login-container'>
        <LoginForm onSubmit={this._onSubmitLoginForm} />
      </div>
    )
  }

  _onSubmitLoginForm (values) {
    // TODO: handle submit form
    console.log(values)
  }
}

export default Login
