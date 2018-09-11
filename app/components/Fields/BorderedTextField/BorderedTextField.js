import './BorderedTextField.css'
import { Field } from 'redux-form'

class BorderedTextField extends React.Component {
  render () {
    const {question, placeholder, className} = this.props
    return (
      <div className={`${className}`}>
        <Field className='bordered-text-field'
          name={question}
          component='input'
          type='text'
          placeholder={placeholder} />
      </div>
    )
  }
}

export default BorderedTextField
