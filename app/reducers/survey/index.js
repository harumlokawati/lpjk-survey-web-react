import { isFSA } from 'flux-standard-action'
import invariant from 'invariant'
import {
  SURVEY_SET_COMPANY_CATEGORY,
  SURVEY_SET_COMPANY_TYPE,
  SURVEY_SET_CONSTRUCTION_PRODUCT_TYPE,
  SURVEY_SET_CONSTRUCTION_PROJECT_COST,
  SURVEY_SET_TECHNOLOGY_CONSTRUCTION_ASSESSMENT,
  SURVEY_SET_TECHNOLOGY_CONSTRUCTION_BENEFIT,
  SURVEY_SET_TECHNOLOGY_CONSTRUCTION_CATEGORY,
  SURVEY_SET_TECHNOLOGY_CONSTRUCTION_COST,
  SURVEY_SET_TECHNOLOGY_CONSTRUCTION_HUMAN_RESOURCE,
  SURVEY_SET_TECHNOLOGY_CONSTRUCTION_INNOVATION_CATEGORY,
  SURVEY_SET_TECHNOLOGY_CONSTRUCTION_INNOVATION_ORIGIN,
  SURVEY_SET_TECHNOLOGY_CONSTRUCTION_OBSTACLE,
  SURVEY_SET_TECHNOLOGY_CONSTRUCTION_ORIGIN,
  SURVEY_SET_TECHNOLOGY_CONSTRUCTION_OWNER,
  SURVEY_SET_TECHNOLOGY_CONSTRUCTION_PRIMARY_TYPE,
  SURVEY_SET_TECHNOLOGY_CONSTRUCTION_STAGE,
  SURVEY_SET_TECHNOLOGY_CONSTRUCTION_SUCCESS_FACTOR,
  SURVEY_SET_TECHNOLOGY_CONSTRUCTION_SUPPLY_CHAIN,
  SURVEY_SET_TECHNOLOGY_CONSTRUCTION_SUPPLY_CHAIN_ORIGIN,
  SURVEY_SET_TECHNOLOGY_CONSTRUCTION_TYPE,
  SURVEY_SET_TECHNOLOGY_CONSTRUCTION_SUPPORT,
  SURVEY_SET_TECHNOLOGY_CONSTRUCTION_LEVEL,
  SURVEY_SET_INTELLECTUAL_PROPERTY_RIGHT,
  SURVEY_SET_REVIEW_DATA,
  SURVEY_SET_REVIEW_DETAIL,
  SURVEY_SET_COMPANIES_DATA
} from 'actions/survey/constants'

let initialState = {
  companyCategory: {},
  companyType: {},
  constructionProductType: {},
  constructionProjectCost: {},
  technologyConstructionAssessment: {},
  technologyConstructionBenefit: {},
  technologyConstructionCategory: {},
  technologyConstructionCost: {},
  technologyConstructionHumanResource: {},
  technologyConstructionInnovationCategory: {},
  technologyConstructionInnovationOrigin: {},
  technologyConstructionObstacle: {},
  technologyConstructionOrigin: {},
  technologyConstructionOwner: {},
  technologyConstructionPrimaryType: {},
  technologyConstructionStage: {},
  technologyConstructionSuccessFactor: {},
  technologyConstructionSupplyChain: {},
  technologyConstructionSupplyChainOrigin: {},
  technologyConstructionType: {},
  technologyConstructionSupport: {},
  technologyConstructionLevel: {},
  intellectualPropertyRight: {},
  reviewData: null,
  companiesData: null,
  surveyDetail: null
}

const reducer = (state = initialState, action) => {
  invariant(
    isFSA(action),
    `Invalid FSA action. See https://github.com/acdlite/flux-standard-action for info. Object: ${JSON.stringify(action)}`
  )

  const {payload = {}} = action
  switch (action.type) {
    case SURVEY_SET_COMPANY_CATEGORY:
      return {...state, companyCategory: payload.companyCategory}
    case SURVEY_SET_COMPANY_TYPE:
      return {...state, companyType: payload.companyType}
    case SURVEY_SET_CONSTRUCTION_PRODUCT_TYPE:
      return {...state, constructionProductType: payload.constructionProductType}
    case SURVEY_SET_CONSTRUCTION_PROJECT_COST:
      return {...state, constructionProjectCost: payload.constructionProjectCost}
    case SURVEY_SET_TECHNOLOGY_CONSTRUCTION_ASSESSMENT:
      return {...state, technologyConstructionAssessment: payload.technologyConstructionAssessment}
    case SURVEY_SET_TECHNOLOGY_CONSTRUCTION_BENEFIT:
      return {...state, technologyConstructionBenefit: payload.technologyConstructionBenefit}
    case SURVEY_SET_TECHNOLOGY_CONSTRUCTION_CATEGORY:
      return {...state, technologyConstructionCategory: payload.technologyConstructionCategory}
    case SURVEY_SET_TECHNOLOGY_CONSTRUCTION_COST:
      return {...state, technologyConstructionCost: payload.technologyConstructionCost}
    case SURVEY_SET_TECHNOLOGY_CONSTRUCTION_HUMAN_RESOURCE:
      return {...state, technologyConstructionHumanResource: payload.technologyConstructionHumanResource}
    case SURVEY_SET_TECHNOLOGY_CONSTRUCTION_INNOVATION_CATEGORY:
      return {...state, technologyConstructionInnovationCategory: payload.technologyConstructionInnovationCategory}
    case SURVEY_SET_TECHNOLOGY_CONSTRUCTION_INNOVATION_ORIGIN:
      return {...state, technologyConstructionInnovationOrigin: payload.technologyConstructionInnovationOrigin}
    case SURVEY_SET_TECHNOLOGY_CONSTRUCTION_OBSTACLE:
      return {...state, technologyConstructionObstacle: payload.technologyConstructionObstacle}
    case SURVEY_SET_TECHNOLOGY_CONSTRUCTION_ORIGIN:
      return {...state, technologyConstructionOrigin: payload.technologyConstructionOrigin}
    case SURVEY_SET_TECHNOLOGY_CONSTRUCTION_OWNER:
      return {...state, technologyConstructionOwner: payload.technologyConstructionOwner}
    case SURVEY_SET_TECHNOLOGY_CONSTRUCTION_PRIMARY_TYPE:
      return {...state, technologyConstructionPrimaryType: payload.technologyConstructionPrimaryType}
    case SURVEY_SET_TECHNOLOGY_CONSTRUCTION_STAGE:
      return {...state, technologyConstructionStage: payload.technologyConstructionStage}
    case SURVEY_SET_TECHNOLOGY_CONSTRUCTION_SUCCESS_FACTOR:
      return {...state, technologyConstructionSuccessFactor: payload.technologyConstructionSuccessFactor}
    case SURVEY_SET_TECHNOLOGY_CONSTRUCTION_SUPPLY_CHAIN:
      return {...state, technologyConstructionSupplyChain: payload.technologyConstructionSupplyChain}
    case SURVEY_SET_TECHNOLOGY_CONSTRUCTION_SUPPLY_CHAIN_ORIGIN:
      return {...state, technologyConstructionSupplyChainOrigin: payload.technologyConstructionSupplyChainOrigin}
    case SURVEY_SET_TECHNOLOGY_CONSTRUCTION_TYPE:
      return {...state, technologyConstructionType: payload.technologyConstructionType}
    case SURVEY_SET_TECHNOLOGY_CONSTRUCTION_SUPPORT:
      return {...state, technologyConstructionSupport: payload.technologyConstructionSupport}
    case SURVEY_SET_TECHNOLOGY_CONSTRUCTION_LEVEL:
      return {...state, technologyConstructionLevel: payload.technologyConstructionLevel}
    case SURVEY_SET_INTELLECTUAL_PROPERTY_RIGHT:
      return {...state, intellectualPropertyRight: payload.intellectualPropertyRight}
    case SURVEY_SET_REVIEW_DATA:
      return {...state, reviewData: payload.review}
    case SURVEY_SET_REVIEW_DETAIL:
      return {...state, surveyDetail: payload.reviewDetail}
    case SURVEY_SET_COMPANIES_DATA:
      return {...state, companiesData: payload.companies}
    default:
      return {...state}
  }
}

export { reducer }
