import SurveyForm from 'components/SurveyForm'
import ProfileForm from 'components/ProfileForm'

class Profile extends React.Component {
  render () {
    return (
      //<SurveyForm onSubmit={this._onSubmitProfileForm} />
      <ProfileForm onSubmit={this._onSubmitProfileForm} />
    )
  }

  _onSubmitProfileForm (values) {
    // TODO: handle submit form
    console.log(values)
  }
}

export default Profile
