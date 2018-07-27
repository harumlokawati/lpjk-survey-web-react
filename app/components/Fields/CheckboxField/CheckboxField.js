import './CheckboxField.css'
import { Field } from 'redux-form'

class CheckboxField extends React.Component {
  render () {
    let { name, label } = this.props

    return (
      <div className='form-check my-2'>
        <Field name={name} component={renderCheckbox} label={label} />
      </div>
    )
  }
}

const renderCheckbox = ({ name, label }) => (
  <label className='form-check-label'>
    <input className='form-check-input' name={name} type='checkbox' />{label}
  </label>
  // <Checkbox
  //  label={label}
  //  checked={input.value ? true : false}
  //  onCheck={input.onChange}
  // />
)

export default CheckboxField
