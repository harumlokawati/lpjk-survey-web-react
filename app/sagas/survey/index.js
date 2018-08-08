import { put, call, takeLatest } from 'redux-saga/effects'
import { SURVEY_PAGE_REQUEST } from 'actions/survey/constants'
import * as apiSurvey from 'api/survey/index'
import * as actSurvey from 'actions/survey/index'

function * pageRequest (action) {
  try {
    let responseSurvey = yield call(apiSurvey.getSurveyData)

    let companyCategories = responseSurvey.data.company_categories
    let companyTypes = responseSurvey.data.company_types
    let constructionProductTypes = responseSurvey.data.construction_product_types
    let constructionProjectCosts = responseSurvey.data.construction_project_costs
    let technologyConstructionAssessments = responseSurvey.data.technology_construction_assessments
    let technologyConstructionAssessmentMethods = responseSurvey.data.technology_construction_assessments_methods
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

    yield put(actSurvey.setCompanyCategory(companyCategories))
    yield put(actSurvey.setCompanyType(companyTypes))
    yield put(actSurvey.setConstructionProductType(constructionProductTypes))
    yield put(actSurvey.setConstructionProjectCost(constructionProjectCosts))
    yield put(actSurvey.setTechnologyConstructionAssessment(technologyConstructionAssessments))
    yield put(actSurvey.setTechnologyConstructionAssessmentMethod(technologyConstructionAssessmentMethods))
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
  } catch (e) {
    console.log(e)
  } finally {
    console.log('success')
  }
}

export default function * surveySaga () {
  yield takeLatest(SURVEY_PAGE_REQUEST, pageRequest)
}
