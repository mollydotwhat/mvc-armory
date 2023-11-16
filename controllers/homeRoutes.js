const router = require('express').Router();
const { Character, CharacterItem, Item, User } = require('../models');
const withAuth = require('../utils/auth');

// -------------------------------------------------------------------
// Sends user to login / landing screen
// -------------------------------------------------------------------
router.get('/', async (req, res) => {
  try {
    res.render('landingpage');
  } catch (err) {
    res.status(500).json(err);
  }
});

// -------------------------------------------------------------------
// Sends user to loadout build screen
// -------------------------------------------------------------------
router.get('/loadout', async (req, res) => {
  try {
    if (req.session.logged_in ){
      res.render('loadout')
    } else {
      res.redirect('/')
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// -------------------------------------------------------------------
// Sends user to saved character screen
// -------------------------------------------------------------------
router.get('/saved-characters', async (req, res) => {
  try {
    if (req.session.logged_in ){
      res.render('characters')
    } else {
      res.redirect('/')
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;