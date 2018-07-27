export function getSurveyData () {
  return axios.get('http://localhost:4000/survey')
    .then(res => {
      return Promise.resolve(res)
    })
    .catch(err => {
      return Promise.reject(err)
    })
}
