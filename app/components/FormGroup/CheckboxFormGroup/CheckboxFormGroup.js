import './CheckboxFormGroup.css'
import CheckboxField from 'components/Fields/CheckboxField'
import FormGroup from '@material-ui/core/FormGroup'
import { Field, FieldArray } from 'redux-form'

const renderOptions = ({fields, options}) => {
  const onChange = (event, newValue, previousValue, name) => {
    if (newValue === true) {
      fields.push(name)
    } else {
      const newFields = fields.getAll()
      newFields.splice(newFields.indexOf(name), 1)

      fields.removeAll()
      fields.push(newFields)
    }
  }

  return options.map((option, index) => {
    return (<Field key={index} name={option.name} component={CheckboxField} label={option.name} onChange={onChange} />)
  })
}

class CheckboxFormGroup extends React.Component {
  render () {
    let {question, className, options} = this.props

    return (
      <div className={`form-group ${className}`}>
        <p>{question.question}</p>
        <FormGroup>
          <FieldArray name={question.key} component={renderOptions} options={options} />
        </FormGroup>
      </div>
    )
  }
}

export default CheckboxFormGroup
