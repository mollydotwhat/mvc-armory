const express = require('express');

const app = express();

// Add if using handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine); // express: here's a new rendering engine
app.set('view engine', 'handlebars'); // express: make handlebars the default renderer

// Session
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const path = require('path')
const routes = require('./controllers')
const sequelize = require('./config/connection');

// Import models to sync with database
const models = require('./models')

const PORT = process.env.PORT || 3001;

// Set up handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home page route
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '/views/index.html'))
// })

// All other routes are directed elsewhere
// app.use('*', routes);
app.use(routes);

// Session
const sess = {
  secret: 'xD0gPEcYLsWS8f',
  cookie: {
    maxAge: 1 * 24 * 60 * 60 * 1000, //expires after 1 day
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
app.use(session(sess))


const okToSync = (process.env.NODE_ENV === 'production') ? false : true;
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'))
})