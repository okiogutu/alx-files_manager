import express from 'express';
import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';
import AuthController from '../controllers/AuthController';
import FilesController from '../controllers/FilesController';

function controllerRouting(app) {
  const router = express.Router();
  app.use('/', router);

  // should return if Redis is alive and if the DB is alive
  router.get('/status', (req, res) => {
    AppController.getStatus(req, res);
  });

  // should return the number of users and files in DB
  router.get('/stats', (req, res) => {
    AppController.getStats(req, res);
  });

  // User Controller

  // should create a new user in DB
  router.post('/users', (req, res) => {
    UsersController.postNew(req, res);
  });

  // Retrieves users based on the token used
  router.get('/users/me', (req, res) => {
    UsersController.getMe(req, res);
  });

  // Auth Controller - signs-in the user by generating a new authentication token
  router.get('/connect', (req, res) => {
    AuthController.getConnect(req, res);
  });

  // signs out the user based on the token
  router.get('/disconnect', (req, res) => {
    AuthController.getDisconnect(req, res);
  });

  // Files Controller - creates a new file in DB and in disk
  router.post('/files', (req, res) => {
    FilesController.postUpload(req, res);
  });

  // retrieves the file document
  router.get('/files/:id', (req, res) => {
    FilesController.getShow(req, res);
  });

  // should retrieve all users file documents
  router.get('/files', (req, res) => {
    FilesController.getIndex(req, res);
  });

  // Sets isPublic to true on the file document based on the ID
  router.put('/files/:id/publish', (req, res) => {
    FilesController.putPublish(req, res);
  });

  // Sets isPublic to false on the file document
  router.put('/files/:id/unpublish', (req, res) => {
    FilesController.putUnpublish(req, res);
  });

  // returnthe content of the file document
  router.get('/files/:id/data', (req, res) => {
    FilesController.getFile(req, res);
  });
}

export default controllerRouting;
