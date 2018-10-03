import { reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import RadioButtonFormGroup from 'components/FormGroup/RadioButtonFormGroup'
import TextFormGroup from 'components/FormGroup/TextFormGroup'
import CheckboxFormGroup from 'components/FormGroup/CheckboxFormGroup'
import { pageRequest, getSurveyById } from 'actions/survey'
import * as surveyQuestions from './constants'
import Button from '@material-ui/core/Button'
import { isEmpty } from 'lodash'
import './SurveyForm.css'

class SurveyForm extends React.Component {
  componentWillMount () {
    const {companyId, params, dispatch} = this.props
    dispatch(pageRequest())

    if (!isEmpty(params)) {
      dispatch(getSurveyById(companyId, params.id))
    }
  }

  render () {
    let {handleSubmit} = this.props
    const data = this.props.data.intellectualPropertyRight.length > 0
    return (
      <form onSubmit={handleSubmit}>
        {data && <div className='survey-form'>
          <div className='container survey-form-header'>
            <img className='lpjk-logo img-fluid' src='http://lpjk.org/template/blue/images/logo_lpjkn_mainpage.jpg' />
            <h3>Survey Penelitian Gambaran Teknologi Konstruksi Di Indonesia</h3>
          </div>
          <div className='container survey-form-content'>
            <hr />
            <div className='row mb-4'>
              <CheckboxFormGroup className='col-md-6'
                question={surveyQuestions.CONSTRUCTION_PRODUCT_TYPE}
                options={this.props.data.constructionProductType} />
              <TextFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_APPLIED}
                placeholder='Jawaban'
                multiline />
            </div>
            <div className='row mb-4'>
              <TextFormGroup className='col-md-6'
                question={surveyQuestions.CONSTRUCTION_PROJECT}
                placeholder='Jawaban'
                multiline />
              <TextFormGroup className='col-md-6'
                question={surveyQuestions.CONSTRUCTION_PROJECT_DATE}
                placeholder='Jawaban'
                multiline />
            </div>
            <div className='row mb-4'>
              <RadioButtonFormGroup className='col-md-6'
                question={surveyQuestions.CONSTRUCTION_PROJECT_COST}
                options={this.props.data.constructionProjectCost} />
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
              <CheckboxFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_COST}
                options={this.props.data.technologyConstructionCost} />
            </div>
            <div className='row mb-4'>
              <RadioButtonFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_BENEFIT}
                options={this.props.data.technologyConstructionBenefit} />
              <TextFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_ALL_BENEFITS}
                placeholder='Jawaban'
                multiline />
            </div>
            <div className='row mb-4'>
              <RadioButtonFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_SUCCESS_FACTOR}
                options={this.props.data.technologyConstructionSuccessFactor} />
              <TextFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_ALL_SUCCESS_FACTORS}
                placeholder='Jawaban'
                multiline />
            </div>
            <div className='row mb-4'>
              <RadioButtonFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_OBSTACLE}
                options={this.props.data.technologyConstructionObstacle} />
              <TextFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_ALL_OBSTACLES}
                placeholder='Jawaban'
                multiline />
            </div>
            <div className='row mb-4'>
              <CheckboxFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_HUMAN_RESOURCE}
                options={this.props.data.technologyConstructionHumanResource} />
              <CheckboxFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_SUPPORT}
                options={this.props.data.technologyConstructionSupport} />
            </div>
            <div className='row mb-4'>
              <RadioButtonFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_SUPPLY_CHAIN}
                options={this.props.data.technologyConstructionSupplyChain} />
              {this.props.answers.technologyConstructionSupplyChain === 'Ya' &&
              <RadioButtonFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_SUPPLY_CHAIN_ORIGIN}
                options={this.props.data.technologyConstructionSupplyChainOrigin} />}
            </div>
            <div className='row mb-4'>
              <RadioButtonFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_INNOVATION_ORIGIN}
                options={this.props.data.technologyConstructionInnovationOrigin} />
              {this.props.answers.technologyConstructionInnovationOrigin === 'Dalam Negeri' &&
              <RadioButtonFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_INNOVATION_CATEGORY}
                options={this.props.data.technologyConstructionInnovationCategory.slice(0, 2)} />}
              {this.props.answers.technologyConstructionInnovationOrigin === 'Luar Negeri' &&
              <RadioButtonFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_INNOVATION_CATEGORY}
                options={this.props.data.technologyConstructionInnovationCategory.slice(2, 5)} />}
            </div>
            {this.props.answers.technologyConstructionInnovationCategory === 'HaKI (Hak atas Kekayaan Intelektual)' &&
            <div className='row mb-4'>
              <RadioButtonFormGroup className='col-md-6'
                question={surveyQuestions.INTELLECTUAL_PROPERTY_RIGHT}
                options={this.props.data.intellectualPropertyRight} />
            </div>}
            <div className='row mb-4'>
              <RadioButtonFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_ASSESSMENT}
                options={this.props.data.technologyConstructionAssessment} />
              {this.props.answers.technologyConstructionAssessment === 'Ya' &&
              <RadioButtonFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_LEVEL}
                options={this.props.data.technologyConstructionLevel} />}
            </div>
            <div className='row'>
              <Button variant='contained' size='large' color='primary' aria-label='Submit' type='submit'>
                Submit
              </Button>
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
  const selector = formValueSelector('survey')
  const {companyId} = state.app
  const {surveyDetail} = state.survey
  return {
    companyId: companyId,
    data: state.survey,
    answers: {
      technologyConstructionSupplyChain: selector(state, 'technology_construction_supply_chain'),
      technologyConstructionInnovationOrigin: selector(state, 'technology_construction_innovation_origin'),
      technologyConstructionInnovationCategory: selector(state, 'technology_construction_innovation_category'),
      technologyConstructionAssessment: selector(state, 'technology_construction_assessment')
    },
    initialValues: {
      construction_product_type: surveyDetail ? surveyDetail.construction_product_type : undefined,
      technology_construction_applied: surveyDetail ? surveyDetail.technology_construction_applied : undefined,
      construction_project: surveyDetail ? surveyDetail.construction_project : undefined,
      construction_project_date: surveyDetail ? surveyDetail.construction_project_date : undefined,
      construction_project_cost: surveyDetail ? surveyDetail.construction_project_cost : undefined,
      technology_construction_stage: surveyDetail ? surveyDetail.technology_construction_stage : undefined,
      technology_construction_type: surveyDetail ? surveyDetail.technology_construction_type : undefined,
      technology_construction_origin: surveyDetail ? surveyDetail.technology_construction_origin : undefined,
      technology_construction_owner: surveyDetail ? surveyDetail.technology_construction_owner : undefined,
      technology_construction_category: surveyDetail ? surveyDetail.technology_construction_category : undefined,
      technology_construction_primary_type: surveyDetail ? surveyDetail.technology_construction_primary_type : undefined,
      technology_construction_cost: surveyDetail ? surveyDetail.technology_construction_cost : undefined,
      technology_construction_benefit: surveyDetail ? surveyDetail.technology_construction_benefit : undefined,
      technology_construction_all_benefits: surveyDetail ? surveyDetail.technology_construction_all_benefits : undefined,
      technology_construction_success_factor: surveyDetail ? surveyDetail.technology_construction_success_factor : undefined,
      technology_construction_all_success_factor: surveyDetail ? surveyDetail.technology_construction_all_success_factor : undefined,
      technology_construction_obstacle: surveyDetail ? surveyDetail.technology_construction_obstacle : undefined,
      technology_construction_all_obstacles: surveyDetail ? surveyDetail.technology_construction_all_obstacles : undefined,
      technology_construction_human_resource: surveyDetail ? surveyDetail.technology_construction_human_resource : undefined,
      technology_construction_support: surveyDetail ? surveyDetail.technology_construction_support : undefined,
      technology_construction_supply_chain: surveyDetail ? surveyDetail.technology_construction_supply_chain : undefined,
      technology_construction_supply_chain_origin: surveyDetail ? surveyDetail.technology_construction_supply_chain_origin : undefined,
      technology_construction_innovation_origin: surveyDetail ? surveyDetail.technology_construction_innovation_origin : undefined,
      technology_construction_innovation_category: surveyDetail ? surveyDetail.technology_construction_innovation_category : undefined,
      intellectual_property_right: surveyDetail ? surveyDetail.intellectual_property_right : undefined,
      technology_construction_assessment: surveyDetail ? surveyDetail.technology_construction_assessment : undefined,
      technology_construction_level: surveyDetail ? surveyDetail.technology_construction_level : undefined
    }
  }
}

const SurveyComponent = reduxForm({form: 'survey', enableReinitialize: true})(SurveyForm)
export default connect(mapStateToProps)(SurveyComponent)
