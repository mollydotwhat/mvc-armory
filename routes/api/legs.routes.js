const router = require('express').Router();
const { Legs } = require('../../models/Leg'); 


router.get('/', async (req, res) => {
  const userData = await Legs.findAll().catch((err) => {
    res.json(err);
  });
  res.json(userData);
});

module.exports = router;
