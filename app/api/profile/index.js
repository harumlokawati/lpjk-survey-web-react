import * as api from '../constant'

let cookiesData = Cookies.get('access_token')

export function createCompany (request) {
  return axios.post(api.PROFILE_POST_FORM, request, generateRequestHeaders())
    .then(res => {
      return Promise.resolve(res)
    })
    .catch(err => {
      return Promise.reject(err)
    })
}

export function updateCompany (request) {
  return axios.put(api.PROFILE_PUT_FORM(request.companyId), request, generateRequestHeaders())
    .then(res => {
      return Promise.resolve(res)
    })
    .catch(err => {
      return Promise.reject(err)
    })
}

export function getCompany (request) {
  return axios.get(api.PROFILE_GET_FORM(request.companyId), generateRequestHeaders())
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
