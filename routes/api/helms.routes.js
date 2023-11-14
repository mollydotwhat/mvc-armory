const router = require('express').Router();
const { Helms } = require('../../models/Helms');

router.get('/', async (req, res) => {
  const userData = await Helms.findAll().catch((err) => {
    res.json(err);
  });
  res.json(userData);
});

module.exports = router;