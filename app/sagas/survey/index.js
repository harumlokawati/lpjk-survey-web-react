import { put, call, takeLatest } from 'redux-saga/effects'
import {
  SURVEY_PAGE_REQUEST,
  SURVEY_ON_CLICK_SUBMIT_SURVEY,
  SURVEY_GET_ALL_SURVEYS,
  SURVEY_GET_ALL_SURVEYS_COMPANY,
  SURVEY_GET_SURVEY_BY_ID
} from 'actions/survey/constants'
import * as actNotif from 'actions/notification/index'
import * as apiSurvey from 'api/survey/index'
import * as actSurvey from 'actions/survey/index'
import { browserHistory } from 'react-router'

function * pageRequest (action) {
  yield put(actNotif.showLoadingSpinner(true))
  try {
    let responseSurvey = yield call(apiSurvey.getSurveyData)

    let companyCategories = responseSurvey.data.company_categories
    let companyTypes = responseSurvey.data.company_types
    let constructionProductTypes = responseSurvey.data.construction_product_types
    let constructionProjectCosts = responseSurvey.data.construction_project_costs
    let technologyConstructionAssessments = responseSurvey.data.technology_construction_assessments
    let technologyConstructionBenefits = responseSurvey.data.technology_construction_benefits
    let technologyConstructionCategories = responseSurvey.data.technology_construction_categories
    let technologyConstructionCosts = responseSurvey.data.technology_construction_costs
    let technologyConstructionHumanResources = responseSurvey.data.technology_construction_human_resources
    let technologyConstructionInnovationCategories = responseSurvey.data.technology_construction_innovation_categories
    let technologyConstructionInnovationOrigins = responseSurvey.data.technology_construction_innovation_origins
    let technologyConstructionObstacles = responseSurvey.data.technology_construction_obstacles
    let technologyConstructionOrigins = responseSurvey.data.technology_construction_origins
    let technologyConstructionOwners = responseSurvey.data.technology_construction_owners
    let technologyConstructionPrimaryTypes = responseSurvey.data.technology_construction_primary_types
    let technologyConstructionStages = responseSurvey.data.technology_construction_stages
    let technologyConstructionSuccessFactors = responseSurvey.data.technology_construction_success_factors
    let technologyConstructionSupplyChainOrigins = responseSurvey.data.technology_construction_supply_chain_origins
    let technologyConstructionSupplyChains = responseSurvey.data.technology_construction_supply_chains
    let technologyConstructionTypes = responseSurvey.data.technology_construction_types
    let technologyConstructionSupports = responseSurvey.data.technology_construction_supports
    let technologyConstructionLevels = responseSurvey.data.technology_construction_levels
    let intellectualPropertyRights = responseSurvey.data.intellectual_property_rights

    yield put(actSurvey.setCompanyCategory(companyCategories))
    yield put(actSurvey.setCompanyType(companyTypes))
    yield put(actSurvey.setConstructionProductType(constructionProductTypes))
    yield put(actSurvey.setConstructionProjectCost(constructionProjectCosts))
    yield put(actSurvey.setTechnologyConstructionAssessment(technologyConstructionAssessments))
    yield put(actSurvey.setTechnologyConstructionBenefit(technologyConstructionBenefits))
    yield put(actSurvey.setTechnologyConstructionCategory(technologyConstructionCategories))
    yield put(actSurvey.setTechnologyConstructionCost(technologyConstructionCosts))
    yield put(actSurvey.setTechnologyConstructionHumanResource(technologyConstructionHumanResources))
    yield put(actSurvey.setTechnologyConstructionInnovationCategory(technologyConstructionInnovationCategories))
    yield put(actSurvey.setTechnologyConstructionInnovationOrigin(technologyConstructionInnovationOrigins))
    yield put(actSurvey.setTechnologyConstructionObstacle(technologyConstructionObstacles))
    yield put(actSurvey.setTechnologyConstructionOrigin(technologyConstructionOrigins))
    yield put(actSurvey.setTechnologyConstructionOwner(technologyConstructionOwners))
    yield put(actSurvey.setTechnologyConstructionPrimaryType(technologyConstructionPrimaryTypes))
    yield put(actSurvey.setTechnologyConstructionStage(technologyConstructionStages))
    yield put(actSurvey.setTechnologyConstructionSuccessFactor(technologyConstructionSuccessFactors))
    yield put(actSurvey.setTechnologyConstructionSupplyChainOrigin(technologyConstructionSupplyChainOrigins))
    yield put(actSurvey.setTechnologyConstructionSupplyChain(technologyConstructionSupplyChains))
    yield put(actSurvey.setTechnologyConstructionType(technologyConstructionTypes))
    yield put(actSurvey.setTechnologyConstructionSupport(technologyConstructionSupports))
    yield put(actSurvey.setTechnologyConstructionLevel(technologyConstructionLevels))
    yield put(actSurvey.setIntellectualPropertyRight(intellectualPropertyRights))
  } catch (e) {
    console.log(e)
  } finally {
    yield put(actNotif.showLoadingSpinner(false))
  }
}

function * onClickSubmitSurvey (request) {
  try {
    let responseSurvey = yield call(apiSurvey.submitSurveyData, request.payload.surveyValues)
    console.log(responseSurvey)
  } catch (e) {
    console.log(e)
  } finally {
    yield put(actNotif.showSnackBar({show: true, variant: 'success', message: 'Berhasil menambahkan data teknologi.'}))
    browserHistory.push('/daftar_teknologi')
  }
}

function * getAllSurveys (request) {
  let response
  try {
    response = yield call(apiSurvey.getAllSurveysByCompany, request.payload.companyId)
  } catch (e) {
    console.log(e)
  } finally {
    yield put(actSurvey.setReviewData(response.data))
  }
}

function * getSurveyById (request) {
  let response
  try {
    const {payload: {companyId, surveyId}} = request
    response = yield call(apiSurvey.getSurveyById, companyId, surveyId)
  } catch (e) {
    console.log(e)
  } finally {
    yield put(actSurvey.setReviewDetail(response.data))
  }
}

function * getAllSurveysCompany (request) {
  let response
  try {
    response = yield call(apiSurvey.getAllSurveys)
  } catch (e) {
    console.log(e)
  } finally {
    yield put(actSurvey.setReviewData(response.data))
  }
}

export default function * surveySaga () {
  yield takeLatest(SURVEY_PAGE_REQUEST, pageRequest)
  yield takeLatest(SURVEY_ON_CLICK_SUBMIT_SURVEY, onClickSubmitSurvey)
  yield takeLatest(SURVEY_GET_ALL_SURVEYS, getAllSurveys)
  yield takeLatest(SURVEY_GET_ALL_SURVEYS_COMPANY, getAllSurveysCompany)
  yield takeLatest(SURVEY_GET_SURVEY_BY_ID, getSurveyById)
}
