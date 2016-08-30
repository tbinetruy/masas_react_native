var React = require("react")

const { dispatch } = require("./reducers/reducers.js")

let MASAS_functions = {}

MASAS_functions.login = async (token) => {
  console.log(dispatch)
  console.log(token)
  try {
    // GET USER TOKEN FROM MASAS API
    const convertTokenURL = globals.ajaxPref + '/auth/convert-token/'

    let convertTokenBody = new FormData()
    convertTokenBody.append("grant_type", "convert_token")
    convertTokenBody.append("client_id", "biHRTlM74WJ2l8NddjR6pa8uNYpWC4vFzTjyjOUO")
    convertTokenBody.append("client_secret", "aNXFRxyW20wBDLmTlf4ntmFKYSQ7qvig3PSRLlSxBYfxpmFPnh9JJz876eLMIeZJaoYyM2F6Q7q36QveAWacmiOT14y1z0EwpqO7lQVhXBx037FNGr6mDwYNq1fGfNVl")
    convertTokenBody.append("backend", "facebook")
    convertTokenBody.append("token", token)

    const convertTokenInit = {
      method: 'POST',
      body: convertTokenBody,
    }

    let MASAS_token = await fetch(convertTokenURL, convertTokenInit)
    let MASAS_tokenJSON = await MASAS_token.json()

    // GET USER PK FROM MASAS API
    const userPkRequestURL = globals.ajaxPref + '/api/check-user/'

    let userPkRequestHeaders = new Headers()
    userPkRequestHeaders.append('Authorization', 'Bearer ' + MASAS_tokenJSON.access_token)

    const userPkInit = {
      method: 'GET',
      headers: userPkRequestHeaders,
    }

    let userPk = await fetch(userPkRequestURL, userPkInit)
    let userPkJSON = await userPk.json()

    // GET USER DATA FROM MASAS API
    const userDataRequestURL = globals.ajaxPref + '/api/users/' + userPkJSON.userPk + '/'

    let userData = await fetch(userDataRequestURL)
    let userDataJSON = await userData.json()

    // UPDATE APP STATE
    dispatch({ 
      type: "LOGIN", 
      token: MASAS_tokenJSON.access_token, 
      userData: userDataJSON , 
      pk: userPkJSON.userPk 
    })
  } catch(error) {
    console.log(error)
  }
}

module.exports = MASAS_functions