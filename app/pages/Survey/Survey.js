import { connect } from 'react-redux'
import './Survey.css'
import SurveyForm from 'components/SurveyForm'
import { onClickSubmitSurvey } from 'actions/survey'

class Survey extends React.Component {
  componentDidMount() {
    document.title = 'Survey | LPJK Survey Teknologi Konstruksi'
  }

  render () {
    return (
      <SurveyForm onSubmit={this._onSubmitSurveyForm} />
    )
  }

  _onSubmitSurveyForm = (values) => {
    values.companyId = this.props.companyId
    this.props.dispatch(onClickSubmitSurvey(values))
  }
}

function mapStateToProps (state) {
  const { loggedIn, companyId } = state.app
  return {
    loggedIn: loggedIn,
    companyId: companyId
  }
}

function mapDispatchToProps (dispatch) {
  return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(Survey)
