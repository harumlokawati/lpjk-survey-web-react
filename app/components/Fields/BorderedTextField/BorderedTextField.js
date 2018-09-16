import './BorderedTextField.css'
import { Field } from 'redux-form'

class BorderedTextField extends React.Component {
  render () {
    const {question, className} = this.props
    return (
      <div className={`${className}`}>
        <Field className='bordered-text-field'
          name={question.key}
          component='input'
          type='text'
          placeholder={question.question} />
      </div>
    )
  }
}

export default BorderedTextField
