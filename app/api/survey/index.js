import * as api from '../constant'

let cookiesData = Cookies.get('access_token')

export function getSurveyData () {
  return axios.get(api.SURVEY_GET_FORM_URL, generateRequestHeaders())
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

function generateRequestHeaders () {
  cookiesData = !cookiesData ? Cookies.get('access_token') : cookiesData
  return {
    headers: {
      Authorization: `Bearer ${cookiesData}`
    }
  }
}
