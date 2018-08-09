import './Survey.css'
import SurveyForm from 'components/SurveyForm'

class Survey extends React.Component {
  render () {
    return (
      <SurveyForm onSubmit={this._onSubmitSurveyForm} />
    )
  }

  _onSubmitSurveyForm (values) {
    // TODO: handle submit form
    console.log(values)
  }
}

export default Survey
