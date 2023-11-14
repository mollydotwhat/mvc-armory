const router = require('express').Router();
const { Torso } = require('../../models/Torso');


router.get('/', async (req, res) => {
  const userData = await Torso.findAll().catch((err) => {
    res.json(err);
  });
  res.json(userData);
});

module.exports = router;
