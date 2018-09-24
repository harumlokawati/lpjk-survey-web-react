import BasicTextField from 'components/Fields/BasicTextField/BasicTextField'

class TextFormGroup extends React.Component {
  render () {
    let {question, placeholder, className, multiline} = this.props
    return (
      <div className={`form-group ${className}`}>
        <p>{question.question}</p>
        <BasicTextField multiline={multiline} question={question} placeholder={placeholder} />
      </div>
    )
  }
}

export default TextFormGroup
