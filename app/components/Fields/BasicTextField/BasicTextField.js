import './BasicTextField.css'
import { Field } from 'redux-form'
import TextField from '@material-ui/core/TextField'

class BasicTextField extends React.Component {
  renderTextField = ({
    input,
    label,
    type,
    className,
    placeholder,
    multiline,
    meta: { touched, error }
  }) => (
    <TextField
      label={label}
      className={className}
      type={type}
      placeholder={placeholder}
      margin='dense'
      autoComplete='off'
      error={touched && (error !== undefined)}
      helperText={touched && error}
      required
      inputProps={{
        'aria-label': 'Description'
      }}
      multiline={multiline}
      fullWidth
      {...input}
    />
  )

  render () {
    const {question, placeholder, className, multiline} = this.props
    return (
      <div className={`${className} wrapper`}>
        <label htmlFor='text-field' className='text-field'>
          <Field name={question.key}
            type='text'
            placeholder={placeholder}
            multiline={multiline}
            component={this.renderTextField} />
          <span className='field-label' />
          <span className='field-border' />
        </label>
      </div>
    )
  }
}

export default BasicTextField
