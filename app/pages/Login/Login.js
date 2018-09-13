import './Login.css'
import LoginForm from 'components/LoginForm'
import { onClickSubmitLogin } from 'actions/auth/login'
import { connect } from 'react-redux'

class Login extends React.Component {
  render () {
    return (
      <div className='login-container'>
        <LoginForm onSubmit={this._onSubmitLoginForm} />
      </div>
    )
  }

  _onSubmitLoginForm = (values) => {
    console.log('wkwk')
    this.props.dispatch(onClickSubmitLogin(values))
  }
}

function mapDispatchToProps (dispatch) {
  return { dispatch }
}

export default connect(null, mapDispatchToProps)(Login)
