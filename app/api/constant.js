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
