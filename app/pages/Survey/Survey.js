import './Survey.css'
import Layout from 'components/Layout'
import SurveyForm from 'components/SurveyForm'

class Survey extends React.Component {
  render () {
    return (
      <Layout>
        <SurveyForm onSubmit={this._onSubmitSurveyForm} />
      </Layout>
    )
  }

  _onSubmitSurveyForm (values) {
    // TODO: handle submit form
    console.log(values)
  }
}

export default Survey
