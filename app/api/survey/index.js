export function getSurveyData () {
  return axios.get('http://localhost:4000/survey')
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
