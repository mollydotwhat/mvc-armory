const router = require('express').Router();
const { Weapons } = require('../../models/Weapon');


router.get('/', async (req, res) => {
  const userData = await Weapons.findAll().catch((err) => {
    res.json(err);
  });
  res.json(userData);
});

module.exports = router;

