import './TextField.css'
import { Field } from 'redux-form'

class TextField extends React.Component {
  render () {
    const {question} = this.props
    return (
      <div className='wrapper'>
        <label htmlFor='text-field' className='text-field'>
          <Field name={question}
            component='input'
            type='text'
            placeholder='Answer' />
          <span className='field-label' />
          <span className='field-border' />
        </label>
      </div>
    )
  }
}

export default TextField
