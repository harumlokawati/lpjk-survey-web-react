import TextField from 'components/Fields/TextField/TextField'

class TextFormGroup extends React.Component {
  render () {
    let {question, placeholder, className} = this.props
    return (
      <div className={`form-group ${className}`}>
        <p>{question.question}</p>
        <TextField question={question} placeholder={placeholder} />
      </div>
    )
  }
}

export default TextFormGroup
