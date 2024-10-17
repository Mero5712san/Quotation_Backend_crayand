const express = require('express')
const router = express.Router()

const GetUserDetails = require('../controllers/UserControllers')

router.get('/userdetails', GetUserDetails.get_user_details)

module.exports = router