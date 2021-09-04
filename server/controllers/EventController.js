const { events } = require('../mock/db')

const getAllEvents = (req, res) => {
  res.send(events)
}

const getEventById = (req, res) => {
  const id = Number(req.params.id)
  const event = events.find((event) => event.id === id)
  res.send(event)
}

module.exports = {
  getAllEvents,
  getEventById,
}
