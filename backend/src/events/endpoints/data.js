const sql = require('../../db.js')
const {getEvents,getEventById,createEvent} = require('../../dbScript.js')

const auth = require('../../middleware/auth.js')
var bodyParser = require('body-parser')

const router = require('express-promise-router')();

var jsonParser = bodyParser.json()


router.get('/', auth, async (req, res) => {
    let result  = await getEvents();
    res.send('message':'events fetched', 'data': result });
})

router.get('/:eventId', auth, async (req, res) => {
    let id = req.params.eventId;
    const result = await getEventById();
    res.send({ 'message': 'event fetched', 'data': result })
})

router.post('/', jsonParser, auth, async (req, res) => {
    let event = req.body;

    let result = await createEvent(event);

    res.send({ 'message': 'event inserted', 'data': result })
})

router.put('/:eventId', auth, jsonParser, async (req, res) => {
    let id = req.params.eventId;
    let event = req.body;

    let result = await sql`update newsletter set ${sql(newsletter, 'newsletter_title', 'newsletter_body', 'tags', 'author', 'length', 'reading_time')
        }
    where newsletter_id = ${id} returning *`

    console.log(result)

    res.send({ 'message': 'events updated', 'data': result })
})


module.exports = router
