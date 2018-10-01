import './Login.css'
import LoginForm from 'components/LoginForm'
import { onClickSubmitLogin } from 'actions/auth/login'
import { connect } from 'react-redux'
import BasicAlertDialog from '../../components/Dialog/BasicAlertDialog'

class Login extends React.Component {
  componentDidMount() {
    document.title = 'Login | LPJK Survey Teknologi Konstruksi';
  }

  render () {
    return (
      <div className='login-container'>
        <LoginForm onSubmit={this._onSubmitLoginForm} />
        { (this.props.register.success) &&
        <BasicAlertDialog title='Hasil' description='Registrasi Berhasil!' /> }
      </div>
    )
  }

  _onSubmitLoginForm = (values) => {
    this.props.dispatch(onClickSubmitLogin(values))
  }
}

function mapStateToProps (state) {
  const { register } = state.notification
  return {
    register: register
  }
}

function mapDispatchToProps (dispatch) {
  return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
