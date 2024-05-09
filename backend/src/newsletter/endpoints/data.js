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
    await sql`SELECT * FROM newsletter;`
    res.send("test1");
})

router.get('/:newsletterId', auth, async (req, res) => {
    let id = req.params.newsletterId;
    let row = await sql`SELECT * FROM newsletter WHERE newsletter_id=${id};`
    console.log(row)
    res.send("test2" + id);
})

router.post('/', jsonParser, auth, async (req, res) => {
    let newsletter = req.body

    await sql`insert into newsletter ${sql(newsletter, 'newsletter_title', 'newsletter_body', 'tags', 'author', 'length', 'reading_time')
        }`

    res.send("test3");
})

router.put('/:newsletterId', auth, jsonParser, async (req, res) => {
    let id = req.params.newsletterId;
    let newsletter = req.body;

    await sql`update newsletter set ${sql(newsletter, 'newsletter_title', 'newsletter_body', 'tags', 'author', 'length', 'reading_time')
        }
    where newsletter_id = ${id}`

    res.send("test4" + id);
})

module.exports = router
