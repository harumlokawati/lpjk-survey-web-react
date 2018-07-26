import { call, put, takeLatest } from 'redux-saga/effects'
import { SURVEY_PAGE_REQUEST } from 'actions/survey/constants'
import * as apiSurvey from 'api/survey/index'

function * pageRequest (action) {
  try {
    let survey = yield call(apiSurvey.getSurveyData)
    console.log('SURVEYYYY')
    console.log(survey)
  } catch (e) {
    console.log(e)
  } finally {
    console.log('success')
  }
}

export default function * surveySaga () {
  yield takeLatest(SURVEY_PAGE_REQUEST, pageRequest)
}