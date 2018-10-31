import {
  SURVEY_PAGE_REQUEST,
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
  SURVEY_SET_COMPANIES_DATA,
  SURVEY_ON_CLICK_SUBMIT_SURVEY,
  SURVEY_GET_ALL_SURVEYS,
  SURVEY_GET_ALL_COMPANIES,
  SURVEY_GET_ALL_SURVEYS_COMPANY,
  SURVEY_GET_SURVEY_BY_ID
} from './constants'

export function pageRequest () {
  return {type: SURVEY_PAGE_REQUEST, payload: {}}
}

export function getAllSurveys (companyId) {
  return {type: SURVEY_GET_ALL_SURVEYS, payload: {companyId}}
}

export function getAllCompanies () {
  return {type: SURVEY_GET_ALL_COMPANIES, payload: {}}
}

export function getAllSurveysCompany () {
  return {type: SURVEY_GET_ALL_SURVEYS_COMPANY, payload: {}}
}

export function getSurveyById (companyId, surveyId) {
  return {type: SURVEY_GET_SURVEY_BY_ID, payload: {companyId, surveyId}}
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
  return {type: SURVEY_SET_TECHNOLOGY_CONSTRUCTION_ASSESSMENT, payload: {technologyConstructionAssessment}}
}

export function setTechnologyConstructionBenefit (technologyConstructionBenefit) {
  return {type: SURVEY_SET_TECHNOLOGY_CONSTRUCTION_BENEFIT, payload: {technologyConstructionBenefit}}
}

export function setTechnologyConstructionCategory (technologyConstructionCategory) {
  return {type: SURVEY_SET_TECHNOLOGY_CONSTRUCTION_CATEGORY, payload: {technologyConstructionCategory}}
}

export function setTechnologyConstructionCost (technologyConstructionCost) {
  return {type: SURVEY_SET_TECHNOLOGY_CONSTRUCTION_COST, payload: {technologyConstructionCost}}
}

export function setTechnologyConstructionHumanResource (technologyConstructionHumanResource) {
  return {type: SURVEY_SET_TECHNOLOGY_CONSTRUCTION_HUMAN_RESOURCE, payload: {technologyConstructionHumanResource}}
}

export function setTechnologyConstructionInnovationCategory (technologyConstructionInnovationCategory) {
  return {type: SURVEY_SET_TECHNOLOGY_CONSTRUCTION_INNOVATION_CATEGORY, payload: {technologyConstructionInnovationCategory}}
}

export function setTechnologyConstructionInnovationOrigin (technologyConstructionInnovationOrigin) {
  return {type: SURVEY_SET_TECHNOLOGY_CONSTRUCTION_INNOVATION_ORIGIN, payload: {technologyConstructionInnovationOrigin}}
}

export function setTechnologyConstructionObstacle (technologyConstructionObstacle) {
  return {type: SURVEY_SET_TECHNOLOGY_CONSTRUCTION_OBSTACLE, payload: {technologyConstructionObstacle}}
}

export function setTechnologyConstructionOrigin (technologyConstructionOrigin) {
  return {type: SURVEY_SET_TECHNOLOGY_CONSTRUCTION_ORIGIN, payload: {technologyConstructionOrigin}}
}

export function setTechnologyConstructionOwner (technologyConstructionOwner) {
  return {type: SURVEY_SET_TECHNOLOGY_CONSTRUCTION_OWNER, payload: {technologyConstructionOwner}}
}

export function setTechnologyConstructionPrimaryType (technologyConstructionPrimaryType) {
  return {type: SURVEY_SET_TECHNOLOGY_CONSTRUCTION_PRIMARY_TYPE, payload: {technologyConstructionPrimaryType}}
}

export function setTechnologyConstructionStage (technologyConstructionStage) {
  return {type: SURVEY_SET_TECHNOLOGY_CONSTRUCTION_STAGE, payload: {technologyConstructionStage}}
}

export function setTechnologyConstructionSuccessFactor (technologyConstructionSuccessFactor) {
  return {type: SURVEY_SET_TECHNOLOGY_CONSTRUCTION_SUCCESS_FACTOR, payload: {technologyConstructionSuccessFactor}}
}

export function setTechnologyConstructionSupplyChain (technologyConstructionSupplyChain) {
  return {type: SURVEY_SET_TECHNOLOGY_CONSTRUCTION_SUPPLY_CHAIN, payload: {technologyConstructionSupplyChain}}
}

export function setTechnologyConstructionSupplyChainOrigin (technologyConstructionSupplyChainOrigin) {
  return {
    type: SURVEY_SET_TECHNOLOGY_CONSTRUCTION_SUPPLY_CHAIN_ORIGIN,
    payload: {technologyConstructionSupplyChainOrigin}
  }
}

export function setTechnologyConstructionType (technologyConstructionType) {
  return {type: SURVEY_SET_TECHNOLOGY_CONSTRUCTION_TYPE, payload: {technologyConstructionType}}
}

export function setConstructionProjectCost (constructionProjectCost) {
  return {type: SURVEY_SET_CONSTRUCTION_PROJECT_COST, payload: {constructionProjectCost}}
}

export function setTechnologyConstructionSupport (technologyConstructionSupport) {
  return {type: SURVEY_SET_TECHNOLOGY_CONSTRUCTION_SUPPORT, payload: {technologyConstructionSupport}}
}

export function setTechnologyConstructionLevel (technologyConstructionLevel) {
  return {type: SURVEY_SET_TECHNOLOGY_CONSTRUCTION_LEVEL, payload: {technologyConstructionLevel}}
}

export function setIntellectualPropertyRight (intellectualPropertyRight) {
  return {type: SURVEY_SET_INTELLECTUAL_PROPERTY_RIGHT, payload: {intellectualPropertyRight}}
}

export function setReviewData (review) {
  return {type: SURVEY_SET_REVIEW_DATA, payload: {review}}
}

export function setReviewDetail (reviewDetail) {
  return {type: SURVEY_SET_REVIEW_DETAIL, payload: {reviewDetail}}
}

export function setCompaniesData (companies) {
  return {type: SURVEY_SET_COMPANIES_DATA, payload: {companies}}
}

export function onClickSubmitSurvey (surveyValues) {
  return {type: SURVEY_ON_CLICK_SUBMIT_SURVEY, payload: {surveyValues}}
}
