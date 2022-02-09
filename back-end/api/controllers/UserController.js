/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 */

const userRepository = require("../repositories/UserRepository");

module.exports = {
  create: (req, res) => {
    userRepository
      .upsert(req.body)
      .then((user) => {
        return res.status(200).json(user);
      })
      .catch((err) => {
        return res.status(400).send(err);
      });
  },

  update: (req, res) => {
    userRepository
      .upsert(req.body, req.param("id"))
      .then((user) => {
        return res.status(200).json(user);
      })
      .catch((err) => {
        return res.status(400).send(err);
      });
  },

  me: (req, res) => {
    res.status(200).json(req.user);
  },
};
