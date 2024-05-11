const sql = require('../../db.js')
const {getEvents,getEventById,createEvent} = require('../../dbScript.js')

const auth = require('../../middleware/auth.js')
var bodyParser = require('body-parser')

const router = require('express-promise-router')();

var jsonParser = bodyParser.json()


router.get('/', auth, async (req, res) => {
    await getEvents();
    res.send("test1");
})

router.get('/:eventId', auth, async (req, res) => {
    let id = req.params.eventId;
    const row = await getEventById();
    console.log(row);
    res.send("test2" + id);
})

router.post('/', jsonParser, auth, async (req, res) => {
    let event = req.body;

    await createEvent(event);

    res.send("test3");
})

module.exports = router