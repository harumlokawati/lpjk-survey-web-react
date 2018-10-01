import './Register.css'
import RegisterForm from 'components/RegisterForm'
import { onClickSubmitRegister } from 'actions/auth/register'
import { connect } from 'react-redux'

class Register extends React.Component {
  componentDidMount () {
    document.title = 'Register | LPJK Survey Teknologi Konstruksi'
  }

  render () {
    return (
      <div className='register-container'>
        <RegisterForm onSubmit={this._onSubmitRegisterForm} />
      </div>
    )
  }

  _onSubmitRegisterForm = (values) => {
    console.log('wkwk')
    this.props.dispatch(onClickSubmitRegister(values))
  }
}

function mapDispatchToProps (dispatch) {
  return { dispatch }
}

export default connect(null, mapDispatchToProps)(Register)
