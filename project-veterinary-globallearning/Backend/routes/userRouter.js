const express = require('express');
const userController = require('../controllers/userController')
// const userValidationSchema = require('../validationSchema/userValidationSchema');
// const validator = require('express-joi-validation');


const routes = (User) => {
  const userRouter = express.Router();

  const {getUsers, postUsers, getUsersById, putUsers, deleteUsersById, getUsersByUserName, postLoginUsers, getFindUser} = userController(User);

  userRouter.route('/users')
      .get(getUsers)
      .post(postUsers);

  userRouter.route('/users/:userId')
      .get(getUsersById)
      .put(putUsers)
      .delete(deleteUsersById);

  userRouter.route('/searchUsers')
      .get(getFindUser);
      

  userRouter.route('/users/login')
      .post(postLoginUsers);

  return userRouter;
}

module.exports = routes;