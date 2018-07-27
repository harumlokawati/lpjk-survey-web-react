import TextField from '../Fields/TextField'

class FormGroup extends React.Component {
  render () {
    let {question, className} = this.props
    return (
      <div className={`form-group ${className}`}>
        <p>{question}</p>
        <TextField question={question} />
      </div>
    )
  }
}

export default FormGroup
