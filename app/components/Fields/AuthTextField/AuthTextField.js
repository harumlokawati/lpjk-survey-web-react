import './AuthTextField.css'
import TextField from '@material-ui/core/TextField'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

class AuthTextField extends React.Component {
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
  })

  render () {
    let { input, label, type, className, meta: { touched, error } } = this.props
    return (
      <MuiThemeProvider theme={this.theme}>
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
      </MuiThemeProvider>
    )
  }
}

export default AuthTextField
