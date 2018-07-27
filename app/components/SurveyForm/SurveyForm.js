import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import RadioButtonFormGroup from 'components/FormGroup/RadioButtonFormGroup'
import TextFormGroup from 'components/FormGroup/TextFormGroup'
import CheckboxFormGroup from 'components/FormGroup/CheckboxFormGroup'
import { pageRequest } from 'actions/survey'

const QUESTION_1 = 'Apa nama perusahaan tempat anda bekerja?'
const QUESTION_2 = 'Dimana lokasi perusahaan tempat anda bekerja?'
const QUESTION_3 = 'Termasuk dalam kategori apakah perusahaan tempat anda bekerja?'
const QUESTION_3_OPTIONS = ['Owner', 'Konsultan', 'Kontraktor', 'Other']
const QUESTION_4 = 'Termasuk dalam jenis bentuk badan usaha apakah perusahaan tempat anda bekerja?'
const QUESTION_4_OPTIONS = ['Gedung', 'Infrastruktur', 'Industri', 'Perumahan', 'Jasa', 'Other']
const QUESTION_5 = 'Apakah jenis produk konstruksi yang dihasilkan perusahaan tempat anda bekerja?'
const QUESTION_6 = 'Teknologi apa yang sudah dan sedang diterapkan oleh perusahaan tempat anda bekerja dalam menghasilkan produk konstruksi?'

class SurveyForm extends React.Component {
  componentWillMount () {
    this.props.dispatch(pageRequest())
  }

  render () {
    let {handleSubmit} = this.props
    return (
      <form onSubmit={handleSubmit}>
        <div className='survey-form'>
          <div className='container survey-form-header'>
            <img className='lpjk-logo' src='http://lpjk.org/template/blue/images/logo_lpjkn_mainpage.jpg' />
            <h3>Survey Penelitian Gambaran Teknologi Konstruksi Di Indonesia</h3>
          </div>
          <div className='container survey-form-content'>
            <div className='line-section'>Profil Perusahaan</div>
            <div className='row mb-4'>
              <TextFormGroup className='col-md-6' question={QUESTION_1} />
              <TextFormGroup className='col-md-6' question={QUESTION_2} />
            </div>
            <div className='row mb-4'>
              <RadioButtonFormGroup className='col-md-6' question={QUESTION_3} options={QUESTION_3_OPTIONS} />
              <CheckboxFormGroup className='col-md-6' question={QUESTION_4} options={QUESTION_4_OPTIONS} />
            </div>
            <div className='row mb-4'>
              <TextFormGroup className='col-md-6' question={QUESTION_5} />
              <TextFormGroup className='col-md-6' question={QUESTION_6} />
            </div>
            <div className='row mt-5 mb-5' />
            <div className='row'>
              <button type='submit'>Submit</button>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

SurveyForm.propTypes = {
  data: PropTypes.object
}

function mapStateToProps (state) {
  return {
    data: state.survey
  }
}

const SurveyComponent = connect(mapStateToProps)(SurveyForm)
export default reduxForm({form: 'survey'})(SurveyComponent)
