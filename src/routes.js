const express = require('express');
const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');
const ApplianceController = require('./controllers/ApplianceController');

const routes = express.Router();

routes.get('/boxes', BoxController.index);
routes.post('/boxes', BoxController.store);
routes.get('/boxes/:id', BoxController.show);
routes.post('/boxes/:id/files', FileController.store);
routes.get('/boxes/:id/files', FileController.index);
routes.delete('/files/:id', FileController.delete);

// Appliance routes
routes.get('/appliances', ApplianceController.index);
routes.post('/appliances', ApplianceController.store);
routes.delete('/appliances/:id', ApplianceController.delete);

module.exports = routes;
