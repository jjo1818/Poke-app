const express = require('express')

// Creates our router
const router = express.Router()

// Load our controller and its route logic
let pokeRouter = require('../controller/pokeController')

router.get('/', pokeRouter.index)

router.get('/new', pokeRouter.new)

router.post('/', pokeRouter.create)
// Setup an "show" route for fruits, attach it to router along with the controller logic
router.get('/:id', pokeRouter.show)

module.exports = router
