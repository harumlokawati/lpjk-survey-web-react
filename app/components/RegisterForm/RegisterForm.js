import './RegisterForm.css'
import { reduxForm, Field } from 'redux-form'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'

class RegisterForm extends React.Component {
  renderInputField = ({input, label, type, className}) => (
    <Input
      placeholder={label}
      className={className}
      type={type}
      autoComplete='off'
      inputProps={{
        'aria-label': 'Description'
      }}
      {...input}
    />)

  render () {
    let {handleSubmit} = this.props
    return (
      <form className='register-form' onSubmit={handleSubmit}>
        <div className='text-center'>
          <img src={require('../../images/lpjk-white.png')} className='lpjk-logo-white' />
          <h4 className='text-white'>Selamat Datang di LPJK</h4>
          <p className='text-white'>Daftarkan Email Anda</p>
        </div>
        <Field name='email' component={this.renderInputField} label='Email' type='email' className='email-input' />
        <Field name='password' component={this.renderInputField} label='Password' type='password' className='password-input' />
        <Button
          variant='contained'
          size='large'
          className='register-button float-right mt-5'
          type='submit'>
          Register
        </Button>
      </form>
    )
  }
}

export default reduxForm({form: 'register'})(RegisterForm)
