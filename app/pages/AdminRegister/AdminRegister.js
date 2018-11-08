import './AdminRegister.css'
import AdminRegisterForm from 'components/AdminRegisterForm'
import { reset } from 'redux-form'
import { onClickSubmitAdminRegister } from 'actions/auth/register'
import { connect } from 'react-redux'

class Register extends React.Component {
  componentDidMount () {
    document.title = 'Admin Register | LPJK Survey Teknologi Konstruksi'
  }

  render () {
    return (
      <div className='admin-register-container'>
        <AdminRegisterForm onSubmit={this._onSubmitRegisterForm} />
      </div>
    )
  }

  _onSubmitRegisterForm = (values) => {
    this.props.dispatch(onClickSubmitAdminRegister(values))
    this.props.dispatch(reset('register'))
  }
}

function mapDispatchToProps (dispatch) {
  return { dispatch }
}

export default connect(null, mapDispatchToProps)(Register)
