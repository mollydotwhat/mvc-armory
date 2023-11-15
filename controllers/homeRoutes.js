const router = require('express').Router();
const { Character, CharacterItem, Item, User } = require('../models');
const withAuth = require('../utils/auth');

// -------------------------------------------------------------------
// Sends user to home/landing page 
// -------------------------------------------------------------------
router.get('/', async (req, res) => {
  try {
    res.render('landingpage', {  
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;