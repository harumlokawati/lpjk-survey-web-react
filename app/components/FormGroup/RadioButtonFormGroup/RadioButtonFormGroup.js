import { Field } from 'redux-form'
import './RadioButtonFormGroup.css'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioButtonGroup from 'components/Fields/RadioButtonGroup'

class RadioButtonFormGroup extends React.Component {
  render () {
    let {question, className, options, disabled} = this.props
    return (
      <div className={`form-group ${className}`}>
        <p>{question.question}</p>
        <Field name={question.key} component={RadioButtonGroup}>
          {options.map(function (option, index) {
            return <FormControlLabel key={index} value={option.name} control={<Radio disabled={disabled} />} label={option.name} />
          })}
        </Field>
      </div>
    )
  }
}

export default RadioButtonFormGroup
