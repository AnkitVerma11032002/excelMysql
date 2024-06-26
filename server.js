const express = require('express');
const sequelize = require('./uitls/db.js');
const userRoutes = require('./routes/user.route.js');
const cors  = require('cors');
require('dotenv').config()

const app = express();
const PORT = 8001;
app.use(cors())
// Middleware to parse JSON bodies
app.use(express.json());
// Use user routes
app.use('/api', userRoutes);

// Synchronize the models with the database
sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(error => {
    console.error('Unable to connect to the database:', error);
  });
