import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import RadioButtonFormGroup from 'components/FormGroup/RadioButtonFormGroup'
import TextFormGroup from 'components/FormGroup/TextFormGroup'
import CheckboxFormGroup from 'components/FormGroup/CheckboxFormGroup'
import { pageRequest } from 'actions/survey'
import * as surveyQuestions from './constants'
import ChecboxFormGroup from '../FormGroup/CheckboxFormGroup'
import './SurveyForm.css'

class SurveyForm extends React.Component {
  componentWillMount () {
    this.props.dispatch(pageRequest())
  }

  render () {
    let {handleSubmit} = this.props
    const data = this.props.data.technologyConstructionType.length > 0
    return (
      <form onSubmit={handleSubmit}>
        {data && <div className='survey-form'>
          <div className='container survey-form-header'>
            <img className='lpjk-logo' src='http://lpjk.org/template/blue/images/logo_lpjkn_mainpage.jpg' />
            <h3>Survey Penelitian Gambaran Teknologi Konstruksi Di Indonesia</h3>
          </div>
          <div className='container survey-form-content'>
            <div className='row mb-4'>
              <CheckboxFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_COST}
                options={this.props.data.technologyConstructionCost} />
            </div>
            <div className='row mb-4'>
              <RadioButtonFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_SUCCESS_FACTOR}
                options={this.props.data.technologyConstructionSuccessFactor} />
              <TextFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_ALL_SUCCESS_FACTORS} />
            </div>
            <div className='row mb-4'>
              <RadioButtonFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_OBSTACLE}
                options={this.props.data.technologyConstructionObstacle} />
              <TextFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_ALL_OBSTACLES} />
            </div>
            <div className='row mb-4'>
              <ChecboxFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_HUMAN_RESOURCE}
                options={this.props.data.technologyConstructionHumanResource} />
              {/* TODO: Pada penggunaan teknologi tersebut, teknologi lain apakah yang mendukung penggunaannya */}
            </div>
            <div className='row mb-4'>
              <RadioButtonFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_SUPPLY_CHAIN}
                options={this.props.data.technologyConstructionSupplyChain} />
              <RadioButtonFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_SUPPLY_CHAIN_ORIGIN}
                options={this.props.data.technologyConstructionSupplyChainOrigin} />
            </div>
            <hr />
            <div className='row mb-4'>
              <CheckboxFormGroup className='col-md-6'
                question={surveyQuestions.CONSTRUCTION_PRODUCT_TYPE}
                options={this.props.data.constructionProductType} />
              <TextFormGroup className='col-md-6'
                question={surveyQuestions.APPLIED_TECHNOLOGY_CONSTRUCTION} />
            </div>
            <div className='row mb-4'>
              <TextFormGroup className='col-md-6'
                question={surveyQuestions.FIRST_APPLIED_PR0JECT} />
              <TextFormGroup className='col-md-6'
                question={surveyQuestions.FIRST_APPLIED_PROJECT_DATE} />
            </div>
            <div className='row mb-4'>
              <RadioButtonFormGroup className='col-md-6'
                question={surveyQuestions.FIRST_APPLIED_PROJECT_VALUE}
                options={this.props.data.technologyConstructionStage} />
              <CheckboxFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_STAGE}
                options={this.props.data.technologyConstructionStage} />
            </div>
            <div className='row mb-4'>
              <RadioButtonFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_TYPE}
                options={this.props.data.technologyConstructionType} />
              <RadioButtonFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_ORIGIN}
                options={this.props.data.technologyConstructionOrigin} />
            </div>
            <div className='row mb-4'>
              <RadioButtonFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_OWNER}
                options={this.props.data.technologyConstructionOwner} />
              <RadioButtonFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_CATEGORY}
                options={this.props.data.technologyConstructionCategory} />
            </div>
            <div className='row mb-4'>
              <RadioButtonFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_PRIMARY_TYPE}
                options={this.props.data.technologyConstructionPrimaryType} />
              <RadioButtonFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_BENEFIT}
                options={this.props.data.technologyConstructionBenefit} />
            </div>
            <div className='row mb-4'>
              <TextFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_ALL_BENEFITS} />
            </div>
            <div className='row mb-4'>
              <RadioButtonFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_INOVATION_ORIGIN}
                options={this.props.data.technologyConstructionInovationOrigin} />
              <RadioButtonFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_INOVATION_CATEGORY}
                options={this.props.data.technologyConstructionInovationCategory} />
            </div>
            <div className='row mb-4'>
              <RadioButtonFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_ASSESSTMENT}
                options={this.props.data.technologyConstructionAssessment} />
              {/* TODO: Berdasarkan daur hidup teknologi terkait dengan tingat kinerja dan berjalannya waktu, berada pada tingkat manakah teknologi tersebut? */}
            </div>

            <div className='row'>
              <button type='submit'>Submit</button>
            </div>
          </div>
        </div>}
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
