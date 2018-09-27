import { connect } from 'react-redux'
import { Field, getFormValues } from 'redux-form'
import './RadioButtonFormGroup.css'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioButtonGroup from 'components/Fields/RadioButtonGroup'
import TextField from '@material-ui/core/TextField'

class RadioButtonFormGroup extends React.Component {
  renderTextField = ({input, disabled, otherClassName}) => (
    <TextField className={otherClassName} disabled={disabled} {...input} />
  )

  render () {
    let {question, className, options, disabled, form, otherClassName} = this.props
    const renderField = () => {
      return (
        <div>
          Lain-Lain &emsp;
          <Field name={question.key + '_lain_lain'} otherClassName={otherClassName} disabled={disabled} component={this.renderTextField} />
        </div>
      )
    }

    let otherValue = form === undefined ? 'Lain-Lain' : form[question.key + '_lain_lain']
    return (
      <div className={`form-group ${className}`}>
        <p>{question.question}</p>
        <Field name={question.key} component={RadioButtonGroup}>
          {options.map(function (option, index) {
            if (option.name === 'Lain-Lain') {
              return <FormControlLabel key={index} value={otherValue} control={<Radio disabled={disabled || false} />} label={renderField()} />
            }
            return <FormControlLabel key={index} value={option.name} control={<Radio disabled={disabled || false} />} label={option.name} />
          })}
        </Field>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    form: getFormValues('survey')(state)
  }
}

export default connect(mapStateToProps)(RadioButtonFormGroup)
