const express = require('express');
const userController = require('../controllers/userController');

const {userRequeriments} = require('../validationSchema/userValidationSchema')
const validator = require('express-joi-validation').createValidator();

const routes = (User) => {
  const userRouter = express.Router();

  const {getUsers, postUsers, getUsersById, putUsers, deleteUsersById, postLoginUsers} = userController(User);

  userRouter.route('/users')
      .get(getUsers);

  userRouter.route('/users/newUser')
      .post(validator.body(userRequeriments),postUsers);
      

  userRouter.route('/users/:userId')
      .get(getUsersById)
      .put(validator.body(userRequeriments), putUsers)
      .delete(deleteUsersById);

      

  userRouter.route('/users/login')
      .post(postLoginUsers);

  return userRouter;
}

module.exports = routes;