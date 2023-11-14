const router = require('express').Router();
const { Item } = require('../../models/Item');

// GET request by id ('/:id')
router.get("/:id", async (req, res) => {
    try {
      const payload = await Item.findByPk(req.params.id);
      res.status(200).json({ status: "success", payload });
    } catch (err) {
      res.status(500).json({ status: "error", payload: err.message });
    }
  })
// GET request by item_type = helmet ('/helmet')
// GET request by item_type = torso ('/torso')
// etc... with weapon, boot, gem, and shield as well

// router.get('/', async (req, res) => {
//   const userData = await Item.findAll().catch((err) => {
//     res.json(err);
//   });
//   res.json(userData);
// });

// module.exports = router;



// TODO: GET request for all items with item_type helmet

// TODO: GET request for all items with item_type toros

// TODO: GET request for all items with item_type weapon

// TODO: GET request for all items with item_type shield

// TODO: GET request for all items with item_type boots

// TODO: GET request for all items with item_type gem