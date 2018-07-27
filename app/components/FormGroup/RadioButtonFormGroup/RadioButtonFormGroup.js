import { Field } from 'redux-form'
import './RadioButtonFormGroup.css'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioButtonGroup from 'components/Fields/RadioButtonGroup'

class RadioButtonFormGroup extends React.Component {
  render () {
    let {question, className, options} = this.props
    return (
      <div className={`form-group ${className}`}>
        <p>{question}</p>
        <Field name='test' component={RadioButtonGroup}>
          {renderRadioButtons(options)}
        </Field>
      </div>
    )
  }
}

var renderRadioButtons = (options) => (
  options.map(function (option, index) {
    return <FormControlLabel key={index} value={option.name} control={<Radio />} label={option.name} />
  })
)

export default RadioButtonFormGroup
