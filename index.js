const timeout = millis => new Promise((res) => setTimeout(res, millis));

module.exports = { timeout };