const router = require('express').Router();
const User = require('../../models/User');

// CREATE new user
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    // Logs user in after creation/signup 
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    console.log("Error creating new user");
    console.log(err);
    res.status(500).json(err);
  }
});

// Log User In
router.post('/login', async (req, res) => {
  try {
    // Check if the entered username is in the database
    const userData = await User.findOne({ where: { username: req.body.username } });

    // If the username doesn't exist, send back error
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

     // If the username exists, validate password
    const validPassword = await userData.checkPassword(req.body.password);

    // If the password isn't correct, send back error
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    // If username and password are correct, log user in
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// Logout User
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;