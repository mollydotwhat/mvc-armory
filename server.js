const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers')
const sequelize = require('./config/connection');

const app = express();

// Add if using handlebars
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine); // express: here's a new rendering engine
app.set('view engine', 'handlebars'); // express: make handlebars the default renderer

const PORT = process.env.PORT || 3001;

// Set up handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.use(routes);

const okToSync = (process.env.NODE_ENV === 'production') ? false : true;
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'))
})