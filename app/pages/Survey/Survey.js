import { connect } from 'react-redux'
import './Survey.css'
import SurveyForm from 'components/SurveyForm'
import { onClickSubmitSurvey } from 'actions/survey'

class Survey extends React.Component {
  render () {
    return (
      <SurveyForm onSubmit={this._onSubmitSurveyForm}/>
    )
  }

  _onSubmitSurveyForm = (values) => {
    this.props.dispatch(onClickSubmitSurvey(values))
  }
}

function mapDispatchToProps (dispatch) {
  return { dispatch }
}

export default connect(null, mapDispatchToProps)(Survey)
