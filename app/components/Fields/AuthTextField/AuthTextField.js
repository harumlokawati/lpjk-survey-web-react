import './AuthTextField.css'

class AuthTextField extends React.Component {
  render () {
    let { className, label } = this.props
    return (
      <label className='field a-field a-field_a1 page__field'>
        <input className='field__input' required />
        <span className='field__label-wrap'>
          <span className='field__label'>{label}</span>
        </span>
      </label>
    )
  }
}

export default AuthTextField
