const router = require('express').Router()

// import all api route files here
const userApiRoutes = require('./user.api.routes')
const itemApiRoutes = require('./item.api.routes')

// import all html files route files here
const userHtmlRoutes = require('../html/user.html.routes')

// Add api routes to the router
router.use('/api/user', userApiRoutes);

router.use('/api/item', itemApiRoutes);
// Add html routes to the router
router.use('/user', userHtmlRoutes);

module.exports = router;