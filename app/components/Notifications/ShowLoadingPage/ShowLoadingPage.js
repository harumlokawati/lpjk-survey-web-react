import LinearProgress from '@material-ui/core/LinearProgress'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    width: 'inherit',
    position: 'fixed'
  }
}

class ShowLoadingPage extends React.Component {
  timer = null

  constructor (props) {
    super(props)
    this.state = {completed: 0}
  }

  componentDidMount () {
    this.timer = setInterval(this.progress, 1)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  progress = () => {
    const { completed } = this.state
    if (completed < 100) {
      this.setState({ completed: Math.min(completed + 10, 100) })
    }
  }

  render () {
    const { classes } = this.props
    return <LinearProgress classes={{root: classes.root}} variant='determinate' value={this.state.completed} />
  }
}

ShowLoadingPage.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ShowLoadingPage)
