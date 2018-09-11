import './LoginForm.css'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'

class LoginForm extends React.Component {
  render () {
    let {handleSubmit} = this.props
    return (
      <form className='login-form' onSubmit={handleSubmit}>
        <div className='text-center'>
          <img src={require('../../images/lpjk-white.png')} className='lpjk-logo-white' />
          <h4 className='text-white'>Selamat Datang di LPJK</h4>
          <p className='text-white'>Masuk dengan Email Anda</p>
        </div>
        <Input
          placeholder='Email'
          className='email-input'
          type='email'
          autoComplete='off'
          inputProps={{
            'aria-label': 'Description'
          }}
        />
        <Input
          placeholder='Password'
          className='password-input'
          type='password'
          autoComplete='off'
          inputProps={{
            'aria-label': 'Description'
          }}
        />
        <Button
          variant='contained'
          className='login-button float-right mt-5'>
          Login
        </Button>
      </form>
    )
  }
}

export default LoginForm
