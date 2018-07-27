import { reduxForm } from 'redux-form'
import FormGroup from 'components/FormGroup'

const QUESTION_1 = 'Apa nama perusahaan tempat anda bekerja?'
const QUESTION_2 = 'Dimana lokasi perusahaan tempat anda bekerja?'
const QUESTION_3 = 'Termasuk dalam kategori apakah perusahaan tempat anda bekerja?'
const QUESTION_4 = 'Termasuk dalam jenis bentuk badan usaha apakah perusahaan tempat anda bekerja?'
const QUESTION_5 = 'Apakah jenis produk konstruksi yang dihasilkan perusahaan tempat anda bekerja?'
const QUESTION_6 = 'Teknologi apa yang sudah dan sedang diterapkan oleh perusahaan tempat anda bekerja dalam menghasilkan produk konstruksi?'

class SurveyForm extends React.Component {
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
            <div className='row mb-5'>
              <FormGroup className='col-md-6' question={QUESTION_1} />
              <FormGroup className='col-md-6' question={QUESTION_2} />
            </div>
            <div className='row mb-5'>
              <FormGroup className='col-md-6' question={QUESTION_3} />
              <FormGroup className='col-md-6' question={QUESTION_4} />
            </div>
            <div className='row mb-5'>
              <FormGroup className='col-md-6' question={QUESTION_5} />
              <FormGroup className='col-md-6' question={QUESTION_6} />
            </div>
            <div className='row'>
              <button type='submit'>Submit</button>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

export default reduxForm({form: 'survey'})(SurveyForm)
