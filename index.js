const timeout = m => new Promise(r => setTimeout(r, m));

module.exports = { timeout };