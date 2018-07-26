import { isFSA } from 'flux-standard-action'
import invariant from 'invariant'
import {
  SURVEY_SET_COMPANY_CATEGORY,
  SURVEY_SET_COMPANY_TYPE,
  SURVEY_SET_CONSTRUCTION_PRODUCT_TYPE,
  SURVEY_SET_TECHNOLOGY_CONSTRUCTION_ASSESSMENT,
  SURVEY_SET_TECHNOLOGY_CONSTRUCTION_ASSESSMENT_METHOD,
  SURVEY_SET_TECHNOLOGY_CONSTRUCTION_BENEFIT,
  SURVEY_SET_TECHNOLOGY_CONSTRUCTION_CATEGORY,
  SURVEY_SET_TECHNOLOGY_CONSTRUCTION_COST,
  SURVEY_SET_TECHNOLOGY_CONSTRUCTION_HUMAN_RESOURCE,
  SURVEY_SET_TECHNOLOGY_CONSTRUCTION_INOVATION_CATEGORY,
  SURVEY_SET_TECHNOLOGY_CONSTRUCTION_INOVATION_ORIGIN,
  SURVEY_SET_TECHNOLOGY_CONSTRUCTION_OBSTACLE,
  SURVEY_SET_TECHNOLOGY_CONSTRUCTION_ORIGIN,
  SURVEY_SET_TECHNOLOGY_CONSTRUCTION_OWNER,
  SURVEY_SET_TECHNOLOGY_CONSTRUCTION_PRIMARY_TYPE,
  SURVEY_SET_TECHNOLOGY_CONSTRUCTION_STAGE,
  SURVEY_SET_TECHNOLOGY_CONSTRUCTION_SUCCESS_FACTOR,
  SURVEY_SET_TECHNOLOGY_CONSTRUCTION_SUPPLY_CHAIN,
  SURVEY_SET_TECHNOLOGY_CONSTRUCTION_SUPPLY_CHAIN_ORIGIN,
  SURVEY_SET_TECHNOLOGY_CONSTRUCTION_TYPE
} from 'actions/survey/constants'

let initialState = {
  companyCategory: {},
  companyType: {},
  constructionProductType: {},
  technologyConstructionAssessment: {},
  technologyConstructionAssessmentMethod: {},
  technologyConstructionBenefit: {},
  technologyConstructionCategory: {},
  technologyConstructionCost: {},
  technologyConstructionHumanResource: {},
  technologyConstructionInovationCategory: {},
  technologyConstructionInovationOrigin: {},
  technologyConstructionObstacle: {},
  technologyConstructionOrigin: {},
  technologyConstructionOwner: {},
  technologyConstructionPrimaryType: {},
  technologyConstructionStage: {},
  technologyConstructionSuccessFactor: {},
  technologyConstructionSupplyChain: {},
  technologyConstructionSupplyChainOrigin: {},
  technologyConstructionType: {}
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
    case SURVEY_SET_TECHNOLOGY_CONSTRUCTION_ASSESSMENT:
      return {...state, constructionProductType: payload.technologyConstructionAssessment}
    case SURVEY_SET_TECHNOLOGY_CONSTRUCTION_ASSESSMENT_METHOD:
      return {...state, constructionProductType: payload.technologyConstructionAssessmentMethod}
    case SURVEY_SET_TECHNOLOGY_CONSTRUCTION_BENEFIT:
      return {...state, constructionProductType: payload.technologyConstructionBenefit}
    case SURVEY_SET_TECHNOLOGY_CONSTRUCTION_CATEGORY:
      return {...state, constructionProductType: payload.technologyConstructionCategory}
    case SURVEY_SET_TECHNOLOGY_CONSTRUCTION_COST:
      return {...state, constructionProductType: payload.technologyConstructionCost}
    case SURVEY_SET_TECHNOLOGY_CONSTRUCTION_HUMAN_RESOURCE:
      return {...state, constructionProductType: payload.technologyConstructionHumanResource}
    case SURVEY_SET_TECHNOLOGY_CONSTRUCTION_INOVATION_CATEGORY:
      return {...state, constructionProductType: payload.technologyConstructionInovationCategory}
    case SURVEY_SET_TECHNOLOGY_CONSTRUCTION_INOVATION_ORIGIN:
      return {...state, constructionProductType: payload.technologyConstructionInovationOrigin}
    case SURVEY_SET_TECHNOLOGY_CONSTRUCTION_OBSTACLE:
      return {...state, constructionProductType: payload.technologyConstructionObstacle}
    case SURVEY_SET_TECHNOLOGY_CONSTRUCTION_ORIGIN:
      return {...state, constructionProductType: payload.technologyConstructionOrigin}
    case SURVEY_SET_TECHNOLOGY_CONSTRUCTION_OWNER:
      return {...state, constructionProductType: payload.technologyConstructionOwner}
    case SURVEY_SET_TECHNOLOGY_CONSTRUCTION_PRIMARY_TYPE:
      return {...state, constructionProductType: payload.technologyConstructionPrimaryType}
    case SURVEY_SET_TECHNOLOGY_CONSTRUCTION_STAGE:
      return {...state, constructionProductType: payload.technologyConstructionStage}
    case SURVEY_SET_TECHNOLOGY_CONSTRUCTION_SUCCESS_FACTOR:
      return {...state, constructionProductType: payload.technologyConstructionSuccessFactor}
    case SURVEY_SET_TECHNOLOGY_CONSTRUCTION_SUPPLY_CHAIN:
      return {...state, constructionProductType: payload.technologyConstructionSupplyChain}
    case SURVEY_SET_TECHNOLOGY_CONSTRUCTION_SUPPLY_CHAIN_ORIGIN:
      return {...state, constructionProductType: payload.technologyConstructionSupplyChainOrigin}
    case SURVEY_SET_TECHNOLOGY_CONSTRUCTION_TYPE:
      return {...state, constructionProductType: payload.technologyConstructionType}
    default:
      return {...state}
  }
}

export { reducer }