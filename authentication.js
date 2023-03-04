require("dotenv").config(); //initialize dotenv
const URL = 'https://demo.tradovateapi.com/v1'

const credentials = {
    name:       process.env.NAME,
    password:   process.env.PASSWORD,
    appId:      process.env.APP_ID,
    appVersion: process.env.APP_VERSION,
    cid:        0,
    sec:        process.env.SECRET_KEY,
}

const getAccessToken = async () => {
    let response = await fetch(URL + '/auth/accessTokenRequest', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    let result = await response.json()
    process.env['myAccessToken'] = result.accessToken
    return result // { accessToken, mdAccessToken, userId, ... }
}

export default {
    getAccessToken
}