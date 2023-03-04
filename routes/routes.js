const URL = 'https://demo.tradovateapi.com/v1'
require("dotenv").config(); //initialize dotenv
/**
 * Get account info
 */

/**
 * Get contract/security info
 */

/**
 * place trade
 */
const orderBody = {
    accountSpec: process.env.ACCOUNT_USERNAME,
    accountId: process.env.ACCOUNT_ID,
    action: "Buy",
    symbol: process.env.SYMBOL,
    orderQty: process.env.ORDER_QTY,
    orderType: "Market",
    isAutomated: true //must be true if this isn't an order made directly by a human
}

const response = await fetch(URL + '/order/placeorder', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${process.env.myAccessToken}`,
    },
    body: JSON.stringify(body)
})

const json = await response.json()

/**
 * close trade
 */

/**
 * monitor trade
 */

