import './CheckboxField.css'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

class CheckboxField extends React.Component {
  render () {
    let {input, label} = this.props
    return (
      <FormControlLabel
        control={
          <Checkbox
            value={label}
            onChange={input.onChange}
          />
        }
        label={label}
      />
    )
  }
}

export default CheckboxField
