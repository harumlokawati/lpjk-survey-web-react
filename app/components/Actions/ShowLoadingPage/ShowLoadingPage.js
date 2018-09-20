import LinearProgress from '@material-ui/core/LinearProgress'

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
      const diff = Math.random() * 30
      this.setState({ completed: Math.min(completed + 10, 100) })
    }
  }

  render () {
    return <LinearProgress variant='determinate' value={this.state.completed} />
  }
}

export default ShowLoadingPage
