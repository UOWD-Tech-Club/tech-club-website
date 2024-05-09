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

    await sql`insert into subscriber ${sql(email, 'email')}`

    res.send("test5")
})

router.post('/verifyEmail', auth, jsonParser, async (req, res) => {
    let id = req.body;

    await sql`update subscriber set is_verified=true where subscriber_id=${id.subscriber_id}`

    res.send("test6")
})

router.post('/unsubscribe', auth, jsonParser, async (req, res) => {
    let id = req.body;

    await sql`delete from subscriber where subscriber_id=${id.subscriber_id}`

    res.send("test7")
})

module.exports = router
