import './Profile.css'
import ProfileForm from 'components/ProfileForm/ProfileForm'
import { connect } from 'react-redux'
import {
  onClickCreateProfile,
  onClickUpdateProfile
} from 'actions/profile'

class Profile extends React.Component {
  componentDidMount () {
    document.title = 'Profil Perusahaan | LPJK Survey Teknologi Konstruksi'
  }

  render () {
    return (
      <ProfileForm onSubmit={this._onSubmitProfileForm} />
    )
  }

  _onSubmitProfileForm = (values) => {
    if (this.props.companyId) {
      values.companyId = this.props.companyId
      this.props.dispatch(onClickUpdateProfile(values))
    } else {
      this.props.dispatch(onClickCreateProfile(values))
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
