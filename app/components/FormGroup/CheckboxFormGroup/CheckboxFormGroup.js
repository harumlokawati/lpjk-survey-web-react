import './CheckboxFormGroup.css'
import TextField from '@material-ui/core/TextField'
import CheckboxField from 'components/Fields/CheckboxField'
import Checkbox from '@material-ui/core/Checkbox'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { connect } from 'react-redux'
import { Field, FieldArray, getFormValues } from 'redux-form'

class CheckboxFormGroup extends React.Component {
  constructor (props) {
    super (props)
    this.state = {prevValue: ''}
  }

  renderOptions = ({fields, options}) => {
    const { question, form } = this.props
    const onChange = (event, newValue, previousValue, name) => {
      if (newValue === true) {
        fields.push(name)
        this.setState({prevValue: name})
      } else {
        const newFields = fields.getAll()
        name = (newFields.indexOf(name) !== -1) ? name : this.state.prevValue;
        newFields.splice(newFields.indexOf(name), 1)
        fields.removeAll()
        newFields.map(value => fields.push(value))
      }
    }

    const renderTextField = ({input, disabled, otherClassName}) => (
      <TextField className={otherClassName} disabled={disabled} {...input} />
    )

    const renderField = () => {
      return (
        <div>
          Lain-Lain &emsp;
          <Field name={question.key + '_lain_lain'} component={renderTextField}/>
        </div>
      )
    }


    let otherValue = form[question.key + '_lain_lain'] === undefined ? '' : form[question.key + '_lain_lain']
    const renderCheckboxField = (field) => {
      return (<FormControlLabel
        control={<Checkbox
          value={otherValue}
          checked={field.input.value}
          onChange={field.input.onChange}
        />}
        label={renderField()}/>)
    }

    return options.map((option, index) => {
      if (option.name === 'Lain-Lain') {
        return <Field key={index} name={otherValue} component={renderCheckboxField} onChange={onChange} />
      }
      return (<Field key={index} name={option.name} component={CheckboxField} label={option.name} onChange={onChange}/>)
    })
  }

  render () {
    let {question, className, options, form} = this.props

    return (
      <div className={`form-group ${className}`}>
        <p>{question.question}</p>
        <FormGroup>
          <FieldArray name={question.key} component={this.renderOptions} options={options}/>
        </FormGroup>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    form: getFormValues('survey')(state)
  }
}

export default connect(mapStateToProps)(CheckboxFormGroup)
