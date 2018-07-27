import RadioGroup from '@material-ui/core/RadioGroup'

class RadioButtonGroup extends React.Component {
  render () {
    const {input, ...rest} = this.props
    return (
      <RadioGroup
        {...input}
        {...rest}
        value={input.value}
        onChange={(event, value) => input.onChange(value)}
      />
    )
  }
}

export default (RadioButtonGroup)
