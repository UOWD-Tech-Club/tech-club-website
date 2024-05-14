const sql = require('../../db.js')
const auth = require('../../middleware/auth.js')
var bodyParser = require('body-parser')

const router = require('express-promise-router')();

var jsonParser = bodyParser.json()

//TODO: set up error handling for edge cases
//TODO: set up unit tests using jest
//TODO: set up documentation 

router.post('/subscribe', auth, jsonParser, async (req, res) => {
    let email = req.body;

    let result = await sql`insert into subscriber ${sql(email, 'email')} returning *`

    res.send({ 'message': 'subscribed', 'data': result })
})

router.post('/verifyEmail', auth, jsonParser, async (req, res) => {
    let id = req.body;

    let result = await sql`update subscriber set is_verified=true where subscriber_id=${id.subscriber_id} returning *`

    res.send({ 'message': 'email verified', 'data': result })
})

router.post('/unsubscribe', auth, jsonParser, async (req, res) => {
    let id = req.body;

    let result = await sql`delete from subscriber where subscriber_id=${id.subscriber_id} returning *`

    res.send({ 'message': 'unsubscribed', 'data': result })
})

module.exports = router
