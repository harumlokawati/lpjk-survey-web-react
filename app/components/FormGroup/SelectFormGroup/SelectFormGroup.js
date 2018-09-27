import { Field } from 'redux-form'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'

class SelectFormGroup extends React.Component {
  renderSelectField = ({input, options}) => {
    return (<FormControl>
      <Select
        variant='outlined'
        autoWidth
        {...input}
      >
        {options.map(option => {
          return <MenuItem key={option.id} value={option.name}>{option.name}</MenuItem>
        })}
      </Select>
    </FormControl>)
  }

  render () {
    let {question, className, options} = this.props
    return (
      <div className={`form-group ${className}`}>
        <p>{question.question}</p>
        <Field name={question.key} component={this.renderSelectField} options={options} inputName={question.key} />
      </div>
    )
  }
}

export default (SelectFormGroup)
