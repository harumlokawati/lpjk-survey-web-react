import { connect } from 'react-redux'
import { Field, getFormValues } from 'redux-form'
import './RadioButtonFormGroup.css'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioButtonGroup from 'components/Fields/RadioButtonGroup'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { COUNTRIES } from './constants'

class RadioButtonFormGroup extends React.Component {
  constructor (props) {
    super(props)
    this.state = { country: '' }
  }

  renderTextField = ({input, disabled, otherClassName}) => (
    <TextField className={otherClassName} disabled={disabled} {...input} />
  )

  renderSelect = ({input, options}) => (
    <Select
      variant='outlined'
      autoWidth
      {...input}
    >
      {options.map(option => {
        return <MenuItem key={option.code} value={option.name}>{option.name}</MenuItem>
      })}
    </Select>
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

    const renderSelect = () => {
      return (
        <div>
          Luar Negeri &emsp;
          <Field name={question.key + '_luar_negeri'} options={COUNTRIES} component={this.renderSelect} />
        </div>
      )
    }

    let otherValue = form === undefined ? 'Lain-Lain' : form[question.key + '_lain_lain']
    let country = form === undefined ? 'Luar Negeri' : form[question.key + '_luar_negeri']
    return (
      <div className={`form-group ${className}`}>
        <p>{question.question}</p>
        <Field name={question.key} component={RadioButtonGroup}>
          {options.map(function (option, index) {
            if (option.name === 'Lain-Lain') {
              return <FormControlLabel key={index} value={otherValue} control={<Radio disabled={disabled || false} />} label={renderField()} />
            }
            if (option.name === 'Luar Negeri') {
              return <FormControlLabel key={index} value={country} control={<Radio disabled={disabled || false} />} label={renderSelect()} />
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
