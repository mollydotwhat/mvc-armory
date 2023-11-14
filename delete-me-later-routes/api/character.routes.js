const router = require('express').Router();
const { Character } = require('../../models/Character');

router.get('/', async (req, res) => {
  const userData = await Character.findAll().catch((err) => {
    res.json(err);
  });
  res.json(userData);
});

//post routes for saving??



module.exports = router;