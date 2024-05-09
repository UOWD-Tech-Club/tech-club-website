var sha256 = require('js-sha256');

module.exports = function (req, res, next) {
    if (sha256(process.env.api_key) === req.headers.authorization) {
        next()
    } else {
        let error = new Error("Unauthorized.")
        next(error)
    }
}