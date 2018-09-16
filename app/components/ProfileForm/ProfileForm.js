import './ProfileForm.css'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import RadioButtonFormGroup from 'components/FormGroup/RadioButtonFormGroup'
import { pageRequest } from 'actions/survey'
import * as profileQuestions from './constants'
import Button from '@material-ui/core/Button'
import BorderedTextField from '../Fields/BorderedTextField'

class ProfileForm extends React.Component {
  componentWillMount () {
    this.props.dispatch(pageRequest())
  }

  render () {
    let {handleSubmit} = this.props
    const data = this.props.data.companyType
    return (
      <form className='profile-form' onSubmit={handleSubmit}>
        {data && <div className='col-md-6'>
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
                options={this.props.data.companyCategory} />
              <RadioButtonFormGroup className='col-md-6'
                question={profileQuestions.COMPANY_TYPE}
                options={this.props.data.companyType} />
            </div>
            <div className='float-right'>
              <Button variant='contained' size='medium' color='primary' aria-label='Save' type='submit'>
                Save
              </Button>
            </div>
          </div>
        </div>}
      </form>
    )
  }
}

ProfileForm.propTypes = {
  data: PropTypes.object
}

function mapStateToProps (state) {
  return {
    data: state.survey
  }
}

const ProfileComponent = connect(mapStateToProps)(ProfileForm)
export default reduxForm({form: 'profile'})(ProfileComponent)
