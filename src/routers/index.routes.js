const {Router} = require('express')
const router = Router()
const {renderIndex,renderAbout} = require('../controllers/index.controllers.js')


router.get('/',renderIndex)

router.get('/login',renderAbout)

module.exports = router