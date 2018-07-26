export function getSurveyData () {
  return axios.get('http://localhost:3002/survey')
    .then(res => {
      return Promise.resolve(res)
    })
    .catch(err => {
      return Promise.reject(err)
    })
}
