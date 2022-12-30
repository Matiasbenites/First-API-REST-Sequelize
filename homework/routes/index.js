const express = require('express');
const userRoutes = require('./users');
const rolRoutes = require('./roles');
const taskRoutes = require('./tasks');

const apiRoutes = express.Router();


apiRoutes.use("/users", userRoutes);

apiRoutes.use("/roles", rolRoutes);

apiRoutes.use("/tasks", taskRoutes);

module.exports = apiRoutes;