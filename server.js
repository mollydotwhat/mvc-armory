const express = require('express');
const app = express();

// Add if using handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine); // express: here's a new rendering engine
app.set('view engine', 'handlebars'); // express: make handlebars the default renderer

const path = require('path')
const routes = require('./routes')
const sequelize = require('./config/connection');

// Import models to sync with database
const models = require('./models')

const PORT = process.env.PORT || 3001;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home page route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

// All other routes are directed elsewhere
app.use('*', routes);


const okToSync = (process.env.NODE_ENV === 'production') ? false : true;
sequelize.sync({ force: okToSync}).then(()=> {
  app.listen(PORT, () => console.log('Now listening'))
})