import * as api from '../constant'

export function getSurveyData () {
  return axios.get(api.SURVEY_GET_FORM_URL)
    .then(res => {
      return Promise.resolve(res)
    })
    .catch(err => {
      return Promise.reject(err)
    })
}

export function submitSurveyData (request) {
  return axios.post('url://', request)
    .then(res => {
      return Promise.resolve(res)
    })
    .catch(err => {
      return Promise.reject(err)
    })
}
