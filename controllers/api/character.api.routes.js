const router = require('express').Router();
const Character = require('../../models/Character');


// Add GET request that pulls a character by id (character's id)

// Add GET request that pulls all characters that have a certain user_id




// // Get all characters
router.get('/', async (req, res) => {
  try {
    const payload = await Character.findAll();
    res.status(200).json({ status: 'success', payload })
  } catch (err) {
    res.status(500).json({ status: 'error', payload: err.message })
  }
})

// // Get one record by pk
// router.get('/:id', async (req, res) => {
//   try {
//     const payload = await Character.findByPk(req.params.id);
//     res.status(200).json({ status: 'success', payload })
//   } catch (err) {
//     res.status(500).json({ status: 'error', payload: err.message })
//   }
// })

// // Create a new record
router.post('/save', async (req, res) => {
  try {
    const payload = await Character.create(
      {
        ...req.body, 
        user_id: req.session.user_id
      }
    );
    res.status(200).json({ status: 'success', payload})
  } catch (err) {
    res.status(500).json({ status: 'error', payload: err.message })
  }
})


// // Update a records
// router.put('/:id', async (req, res) => {
//   try {
//     const payload = await Character.update(
//       req.body,
//       {
//         where: {
//           id: req.params.id
//         }
//       }
//     );
//     res.status(200).json({ status: 'success', payload })
//   } catch (err) {
//     res.status(500).json({ status: 'error', payload: err.message })
//   }
// })

// // Delete a record
// router.delete('/:id', async (req, res) => {
//   try {
//     const payload = await Character.destroy({
//       where: {
//         id: req.params.id
//       }
//     });
//     res.status(200).json({ status: 'success' })
//   } catch (err) {
//     res.status(500).json({ status: 'error', payload: err.message })
//   }
// })

module.exports = router;