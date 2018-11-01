import './RegisterForm.css'
import { reduxForm, Field } from 'redux-form'
import Button from '@material-ui/core/Button'
import AuthTextField from 'components/Fields/AuthTextField'
import { Link } from 'react-router'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

const validate = values => {
  const errors = {}
  const requiredFields = [
    'email',
    'password'
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address'
  }
  return errors
}

class RegisterForm extends React.Component {
  render () {
    const theme = createMuiTheme({
      palette: {
        primary: {
          main: '#8b0000'
        }
      }
    })

    let {handleSubmit} = this.props
    return (
      <form className='register-form' onSubmit={handleSubmit}>
        <div className='text-center'>
          <img src={require('../../images/lpjk-white.png')} className='lpjk-logo-white' />
          <h4 className='text-white'>Selamat Datang di LPJK</h4>
          <p className='text-white'>Daftarkan Email Anda</p>
        </div>
        <Field name='email' component={AuthTextField} label='Email' type='email' className='email-input' />
        <Field name='password' component={AuthTextField} label='Password' type='password' className='password-input' />
        <span className='row line-break' />
        <Link className='text-white' to='/login'>Sudah memiliki akun?</Link>
        <MuiThemeProvider theme={theme}>
          <Button
            variant='contained'
            size='large'
            className='register-button float-right mt-5'
            color='primary'
            type='submit'>
            Register
          </Button>
        </MuiThemeProvider>
      </form>
    )
  }
}

const mapForm = {
  form: 'register',
  validate,
  initialValues: {
    role: 'user'
  }
}

export default reduxForm(mapForm)(RegisterForm)
