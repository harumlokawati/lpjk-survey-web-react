import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import RadioButtonFormGroup from 'components/FormGroup/RadioButtonFormGroup'
import TextFormGroup from 'components/FormGroup/TextFormGroup'
import CheckboxFormGroup from 'components/FormGroup/CheckboxFormGroup'
import { pageRequest } from 'actions/survey'
import * as surveyQuestions from './constants'
import Button from '@material-ui/core/Button'
import './SurveyForm.css'

class SurveyForm extends React.Component {
  componentWillMount () {
    this.props.dispatch(pageRequest())
  }

  render () {
    let {handleSubmit} = this.props
    const data = this.props.data.technologyConstructionLevel.length > 0
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
              <RadioButtonFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_BENEFIT}
                options={this.props.data.technologyConstructionBenefit} />
            </div>
            <div className='row mb-4'>
              <TextFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_ALL_BENEFITS}
                placeholder='Jawaban'
                multiline />
              <CheckboxFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_COST}
                options={this.props.data.technologyConstructionCost} />
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
              <RadioButtonFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_SUPPLY_CHAIN_ORIGIN}
                options={this.props.data.technologyConstructionSupplyChainOrigin} />
            </div>
            <div className='row mb-4'>
              <RadioButtonFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_INNOVATION_ORIGIN}
                options={this.props.data.technologyConstructionInnovationOrigin} />
              <RadioButtonFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_INNOVATION_CATEGORY}
                options={this.props.data.technologyConstructionInnovationCategory} />
            </div>
            <div className='row mb-4'>
              <RadioButtonFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_ASSESSMENT}
                options={this.props.data.technologyConstructionAssessment} />
              <RadioButtonFormGroup className='col-md-6'
                question={surveyQuestions.TECHNOLOGY_CONSTRUCTION_LEVEL}
                options={this.props.data.technologyConstructionLevel} />
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
  return {
    data: state.survey
  }
}

const SurveyComponent = connect(mapStateToProps)(SurveyForm)
export default reduxForm({form: 'survey'})(SurveyComponent)
