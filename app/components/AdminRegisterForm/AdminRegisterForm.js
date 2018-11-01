import './AdminRegisterForm.css'
import { Field, reduxForm } from 'redux-form'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import AuthTextField from '../Fields/AuthTextField'

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

class AdminRegisterForm extends React.Component {
  render () {
    const theme = createMuiTheme({
      palette: {
        primary: {
          main: '#000000'
        }
      }
    })

    let { handleSubmit } = this.props
    return (
      <form className='admin-register-form' onSubmit={handleSubmit}>
        <div className='text-center'>
          <h4 className='text-white'>Registrasi Admin</h4>
        </div>
        <Field name='email' component={AuthTextField} label='Email' type='email' className='email-input' />
        <Field name='password' component={AuthTextField} label='Password' type='password' className='password-input' />
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
    role: 'admin'
  }
}

export default reduxForm(mapForm)(AdminRegisterForm)
