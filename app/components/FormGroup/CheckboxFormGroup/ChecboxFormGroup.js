import './ChecboxFormGroup.css'
import CheckboxField from 'components/Fields/CheckboxField'

class ChecboxFormGroup extends React.Component {
  render () {
    let {question, className, options} = this.props
    return (
      <div className={`form-group ${className}`}>
        <p>{question}</p>
        {renderCheckboxes(options)}
      </div>
    )
  }
}

var renderCheckboxes = (options) => (
  options.map(function (option, index) {
    return renderCheckbox(option, index)
  })
)

var renderCheckbox = (option, index) => (
  <CheckboxField key={index} label={option} name={option} />
)

export default ChecboxFormGroup
