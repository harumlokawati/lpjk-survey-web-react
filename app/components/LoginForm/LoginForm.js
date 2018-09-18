import './LoginForm.css'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import blue from '@material-ui/core/colors/blue'

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

class LoginForm extends React.Component {
  theme = createMuiTheme({
    palette: {
      primary: {
        light: '#FFFFFF',
        main: '#FFFFFF',
        dark: '#FFFFFF',
        contrastText: '#FFFFFF'
      },
      secondary: {
        light: '#FFFFFF',
        main: '#FFFFFF',
        dark: '#FFFFFF',
        contrastText: '#FFFFFF'
      }
    }
  });

  renderInputField = ({input, label, type, className, meta: { touched, error }}) => (
    <MuiThemeProvider theme={this.theme}>
      {console.log(error)}
      <TextField
        label={label}
        className={className}
        type={type}
        margin='dense'
        autoComplete='off'
        error={touched && (error !== undefined)}
        helperText={touched && error}
        required
        inputProps={{
          'aria-label': 'Description'
        }}
        {...input}
      />
    </MuiThemeProvider>)

  render () {
    const theme = createMuiTheme({
      palette: {
        primary: blue
      }
    })

    let {handleSubmit} = this.props
    return (
      <div className='container'>
        <form className='login-form' onSubmit={handleSubmit}>
          <div className='text-center'>
            <img src={require('../../images/lpjk-white.png')} className='lpjk-logo-white' />
            <h4 className='text-white'>Selamat Datang di LPJK</h4>
            <p className='text-white'>Masuk dengan Email Anda</p>
          </div>
          <Field name='email' component={this.renderInputField} label='Email' type='email' className='email-input' />
          <Field name='password' component={this.renderInputField} label='Password' type='password'
            className='password-input' />
          <span className='row line-break' />
          <Link className='text-white' to='/register'>Belum memiliki akun?</Link>
          <MuiThemeProvider theme={theme}>
            <Button
              variant='contained'
              size='large'
              className='login-button float-right mt-5'
              color='primary'
              type='submit'>
            Login
            </Button>
          </MuiThemeProvider>
        </form>
      </div>
    )
  }
}

const mapForm = {
  form: 'login',
  validate
}
export default reduxForm(mapForm)(LoginForm)
