import { connect, browserHistory } from 'react-redux'
import './Survey.css'
import SurveyForm from 'components/SurveyForm'
import { onClickSubmitSurvey } from 'actions/survey'

class Survey extends React.Component {
  componentWillMount () {
    if (!this.props.loggedIn) {
      browserHistory.push('/')
    }
  }

  render () {
    return (
      <SurveyForm onSubmit={this._onSubmitSurveyForm} />
    )
  }

  _onSubmitSurveyForm = (values) => {
    this.props.dispatch(onClickSubmitSurvey(values))
  }
}

function mapStateToProps (state) {
  const { loggedIn } = state.app
  return {
    loggedIn: loggedIn
  }
}

function mapDispatchToProps (dispatch) {
  return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(Survey)
