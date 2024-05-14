const sql = require('../../db.js')
const auth = require('../../middleware/auth.js')
var bodyParser = require('body-parser')

const router = require('express-promise-router')();

var jsonParser = bodyParser.json()

//TODO: set up mailing api
//TODO: set up error handling for edge cases
//TODO: set up unit tests using jest
//TODO: set up documentation 

//endpoints - newsletters GET, newsletters/id POST and GET and PUT
router.get('/', auth, async (req, res) => {
    let result = await sql`SELECT * FROM newsletter;`

    res.send({ 'message': 'newsletters fetched', 'data': result })
})

router.get('/:newsletterId', auth, async (req, res) => {
    let id = req.params.newsletterId;
    let result = await sql`SELECT * FROM newsletter WHERE newsletter_id=${id};`

    res.send({ 'message': 'newletter fetched', 'data': result })
})

router.post('/', jsonParser, auth, async (req, res) => {
    let newsletter = req.body

    let result = await sql`insert into newsletter ${sql(newsletter, 'newsletter_title', 'newsletter_body', 'tags', 'author', 'length', 'reading_time')
        } returning *`

    res.send({ 'message': 'newsletter inserted', 'data': result })
})

router.put('/:newsletterId', auth, jsonParser, async (req, res) => {
    let id = req.params.newsletterId;
    let newsletter = req.body;

    let result = await sql`update newsletter set ${sql(newsletter, 'newsletter_title', 'newsletter_body', 'tags', 'author', 'length', 'reading_time')
        }
    where newsletter_id = ${id} returning *`

    console.log(result)

    res.send({ 'message': 'newsletter updated', 'data': result })
})

module.exports = router
