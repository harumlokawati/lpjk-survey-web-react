// const BACKEND_PORT = process.env.BACKEND_PORT
// const SERVICE_HOST = process.env.SERVICE_HOST
// const HOST = `${SERVICE_HOST}:${BACKEND_PORT}`
const HOST = 'http://localhost:4000'
export const LOGIN_URL = `${HOST}/auth/login`
export const REGISTER_URL = `${HOST}/auth/register`

/**
 * Survey endpoints
 */
export const SURVEY_GET_FORM_URL = `${HOST}/survey`
export const SURVEY_POST_FORM = (id) => `${HOST}/company/${id}/survey`
export const SURVEY_GET_BY_COMPANY = (id) => `${HOST}/company/${id}/survey`
export const SURVEY_GET_BY_ID = (companyId, surveyId) => `${HOST}/company/${companyId}/survey/${surveyId}`

/**
 * Company endpoints
 */
export const PROFILE_POST_FORM = `${HOST}/company`
export const PROFILE_PUT_FORM = (id) => `${HOST}/company/${id}`
export const PROFILE_GET_FORM = (id) => `${HOST}/company/${id}`
