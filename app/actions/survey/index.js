import {
  SURVEY_PAGE_REQUEST,
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
} from './constants'

export function pageRequest () {
  return {type: SURVEY_PAGE_REQUEST, payload: {}}
}

export function setCompanyCategory (companyCategory) {
  return {type: SURVEY_SET_COMPANY_CATEGORY, payload: {companyCategory}}
}

export function setCompanyType (companyType) {
  return {type: SURVEY_SET_COMPANY_TYPE, payload: {companyType}}
}

export function setConstructionProductType (constructionProductType) {
  return {type: SURVEY_SET_CONSTRUCTION_PRODUCT_TYPE, payload: {constructionProductType}}
}

export function setTechnologyConstructionAssessment (technologyConstructionAssessment) {
  return {type: SURVEY_SET_TECHNOLOGY_CONSTRUCTION_ASSESSMENT, payload: technologyConstructionAssessment}
}

export function setTechnologyConstructionAssessmentMethod (technologyConstructionAssessmentMethod) {
  return {type: SURVEY_SET_TECHNOLOGY_CONSTRUCTION_ASSESSMENT_METHOD, payload: technologyConstructionAssessmentMethod}
}

export function setTechnologyConstructionBenefit (technologyConstructionBenefit) {
  return {type: SURVEY_SET_TECHNOLOGY_CONSTRUCTION_BENEFIT, payload: technologyConstructionBenefit}
}

export function setTechnologyConstructionCategory (technologyConstructionCategory) {
  return {type: SURVEY_SET_TECHNOLOGY_CONSTRUCTION_CATEGORY, payload: technologyConstructionCategory}
}

export function setTechnologyConstructionCost (technologyConstructionCost) {
  return {type: SURVEY_SET_TECHNOLOGY_CONSTRUCTION_COST, payload: technologyConstructionCost}
}

export function setTechnologyConstructionHumanResource (technologyConstructionHumanResource) {
  return {type: SURVEY_SET_TECHNOLOGY_CONSTRUCTION_HUMAN_RESOURCE, payload: technologyConstructionHumanResource}
}

export function setTechnologyConstructionInovationCategory (technologyConstructionInovationCategory) {
  return {type: SURVEY_SET_TECHNOLOGY_CONSTRUCTION_INOVATION_CATEGORY, payload: technologyConstructionInovationCategory}
}

export function setTechnologyConstructionInovationOrigin (technologyConstructionInovationOrigin) {
  return {type: SURVEY_SET_TECHNOLOGY_CONSTRUCTION_INOVATION_ORIGIN, payload: technologyConstructionInovationOrigin}
}

export function setTechnologyConstructionObstacle (technologyConstructionObstacle) {
  return {type: SURVEY_SET_TECHNOLOGY_CONSTRUCTION_OBSTACLE, payload: technologyConstructionObstacle}
}

export function setTechnologyConstructionOrigin (technologyConstructionOrigin) {
  return {type: SURVEY_SET_TECHNOLOGY_CONSTRUCTION_ORIGIN, payload: technologyConstructionOrigin}
}

export function setTechnologyConstructionOwner (technologyConstructionOwner) {
  return {type: SURVEY_SET_TECHNOLOGY_CONSTRUCTION_OWNER, payload: technologyConstructionOwner}
}

export function setTechnologyConstructionPrimaryType (technologyConstructionPrimaryType) {
  return {type: SURVEY_SET_TECHNOLOGY_CONSTRUCTION_PRIMARY_TYPE, payload: technologyConstructionPrimaryType}
}

export function setTechnologyConstructionStage (technologyConstructionStage) {
  return {type: SURVEY_SET_TECHNOLOGY_CONSTRUCTION_STAGE, payload: technologyConstructionStage}
}

export function setTechnologyConstructionSuccessFactor (technologyConstructionSuccessFactor) {
  return {type: SURVEY_SET_TECHNOLOGY_CONSTRUCTION_SUCCESS_FACTOR, payload: technologyConstructionSuccessFactor}
}

export function setTechnologyConstructionSupplyChain (technologyConstructionSupplyChain) {
  return {type: SURVEY_SET_TECHNOLOGY_CONSTRUCTION_SUPPLY_CHAIN, payload: technologyConstructionSupplyChain}
}

export function setTechnologyConstructionSupplyChainOrigin (technologyConstructionSupplyChainOrigin) {
  return {
    type: SURVEY_SET_TECHNOLOGY_CONSTRUCTION_SUPPLY_CHAIN_ORIGIN,
    payload: technologyConstructionSupplyChainOrigin
  }
}

export function setTechnologyConstructionType (technologyConstructionType) {
  return {type: SURVEY_SET_TECHNOLOGY_CONSTRUCTION_TYPE, payload: technologyConstructionType}
}
