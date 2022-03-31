const express = require('express');
const userController = require('../controllers/userController');




const routes = (User) => {
  const userRouter = express.Router();

  const {getUsers, postUsers, getUsersById, putUsers, deleteUsersById, postLoginUsers} = userController(User);

  userRouter.route('/users')
      .get(getUsers);

  userRouter.route('/users/newUser')
      .post(postUsers);
      

  userRouter.route('/users/:userId')
      .get(getUsersById)
      .put(putUsers)
      .delete(deleteUsersById);

      

  userRouter.route('/users/login')
      .post(postLoginUsers);

  return userRouter;
}

module.exports = routes;