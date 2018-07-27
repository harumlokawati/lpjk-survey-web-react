import './ChecboxFormGroup.css'
import CheckboxField from 'components/Fields/CheckboxField'
import FormGroup from '@material-ui/core/FormGroup'
import { Field } from 'redux-form'

class ChecboxFormGroup extends React.Component {
  render () {
    let {question, className, options} = this.props
    return (
      <div className={`form-group ${className}`}>
        <p>{question}</p>
        <FormGroup>
          {options.map(function (option, index) {
            return (
              <Field key={index} name={option} component={CheckboxField} label={option} />
            )
          })}
        </FormGroup>
      </div>
    )
  }
}

export default ChecboxFormGroup
