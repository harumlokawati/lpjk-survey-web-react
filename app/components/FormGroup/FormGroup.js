import TextField from '../Fields/TextField'

class FormGroup extends React.Component {
  render () {
    let {question, className} = this.props
    return (
      <div className={`form-group ${className}`}>
        <p>{question}</p>
        <TextField />
      </div>
    )
  }
}

export default FormGroup
