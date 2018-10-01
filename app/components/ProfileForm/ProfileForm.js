import './ProfileForm.css'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import RadioButtonFormGroup from 'components/FormGroup/RadioButtonFormGroup'
import SelectFormGroup from 'components/FormGroup/SelectFormGroup'
import { pageRequest } from 'actions/survey'
import { getProfile } from 'actions/profile'
import * as profileQuestions from './constants'
import Button from '@material-ui/core/Button'
import BorderedTextField from '../Fields/BorderedTextField'
import _ from 'lodash'

class ProfileForm extends React.Component {
  componentWillMount () {
    this.props.dispatch(pageRequest())
    if (this.props.companyId) {
      let values = {}
      values.companyId = this.props.companyId
      this.props.dispatch(getProfile(values))
    }
  }

  render () {
    let {handleSubmit} = this.props
    const data = this.props.data.companyType
    return (
      <form className='profile-form' onSubmit={handleSubmit}>
        {!_.isEmpty(data) && <div className='col-md-6'>
          <div className='profile-form-header'>
            <h3>Profil Perusahaan</h3>
          </div>
          <div className='profile-form-content'>
            <hr />
            <div className='row mb-4'>
              <BorderedTextField className='col-md-6' question={profileQuestions.COMPANY_NAME} />
              <BorderedTextField className='col-md-6' question={profileQuestions.COMPANY_LOCATION} />
            </div>
            <div className='row mb-4'>
              <RadioButtonFormGroup className='col-md-6'
                question={profileQuestions.COMPANY_CATEGORY}
                options={this.props.data.companyCategory}
                otherClassName='col-md-7'
                disabled />
              <SelectFormGroup className='col-md-6'
                question={profileQuestions.COMPANY_TYPE}
                options={this.props.data.companyType} />
            </div>
            <div className='float-right'>
              <Button variant='contained' size='medium' color='primary' aria-label='Save' type='submit'>
                Simpan
              </Button>
            </div>
          </div>
        </div>}
      </form>
    )
  }
}

function mapStateToProps (state) {
  return {
    initialValues: {
      name: state.profile.companyName,
      location: state.profile.companyLocation,
      category: profileQuestions.COMPANY_CATEGORY_INIT,
      business_type: state.profile.companyType
    },
    companyId: state.app.companyId,
    data: state.survey
  }
}

function mapDispatchToProps (dispatch) {
  return { dispatch }
}

const ProfileComponent = reduxForm({form: 'profile', enableReinitialize: true})(ProfileForm)
export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent)
