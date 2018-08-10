import './ProfileForm.css'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import RadioButtonFormGroup from 'components/FormGroup/RadioButtonFormGroup'
import { pageRequest } from 'actions/survey'
import * as profileQuestions from './constants'
import TextField from '../Fields/TextField'
import Button from '@material-ui/core/Button'

class ProfileForm extends React.Component {
  componentWillMount () {
    this.props.dispatch(pageRequest())
  }

  render () {
    let {handleSubmit} = this.props
    let COMPANY_CATEGORY_OPTIONS = [
      { id: 1, name: 'Owner' },
      { id: 2, name: 'Konsultan' },
      { id: 3, name: 'Kontraktor' },
      { id: 4, name: 'Other' }
    ]
    let COMPANY_TYPE_OPTIONS = [
      { id: 1, name: 'Perusahaan Perseorangan' },
      { id: 2, name: 'Koperasi' },
      { id: 3, name: 'Badan Usaha Milik Negara (BUMN)' },
      { id: 4, name: 'Badan Usaha Milik Swasta (BUMS)' },
      { id: 5, name: 'Other' }
    ]
    const data = true
    return (
      <form className='profile-form' onSubmit={handleSubmit}>
        {data && <div className='col-md-8'>
          <div className='profile-form-header'>
            <h3>Profil Perusahaan</h3>
          </div>
          <div className='profile-form-content'>
            <hr />
            <div className='row mb-4'>
              <TextField className='col-md-6' question='company_name' placeholder='Nama' />
              <TextField className='col-md-6' question='company_location' placeholder='Location' />
            </div>
            <div className='row mb-4'>
              <RadioButtonFormGroup className='col-md-6'
                question={profileQuestions.COMPANY_CATEGORY}
                options={COMPANY_CATEGORY_OPTIONS} />
              <RadioButtonFormGroup className='col-md-6'
                question={profileQuestions.COMPANY_TYPE}
                options={COMPANY_TYPE_OPTIONS} />
            </div>
            <div className='float-right'>
              <Button variant='contained' size='large' color='primary' aria-label='Save' type='submit'>
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
