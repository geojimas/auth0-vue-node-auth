
const express = require('express')
const router = express.Router()
const { checkJwt } = require('../middlewares/jwt')
const { getAllEvents, getEventById } = require('../controllers/EventController')

// get all events
router.get('/events', checkJwt, getAllEvents)

// get event by id
router.get('/events/:id', checkJwt, getEventById)

// Home
router.get('/', (req, res) => {
    res.send('<h2>JWT Authentication with Auth0 Provider</h2>')
})


module.exports = router