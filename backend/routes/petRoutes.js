const express = require('express')
const router = express.Router()
const { getPets, setPet, updatePet, deletePet } = require('../controllers/petController')

router.route('/').get(getPets).post(setPet)
router.route('/:id').delete(deletePet).put(updatePet)

module.exports = router