/**
 * is-logged-in
 *
 * A simple policy that allows any request from an authenticated user.
 */
const passport = require("passport");

module.exports = async (req, res, proceed) => {
  passport.authenticate("jwt", { session: false }, (error, user) => {
    if (error) {
      sails.log.error(error);
      return res.serverError("error.policies.serverError");
    }

    if (!user) {
      return res.unauthorized("error.policies.unauthorized");
    }

    User.findOne({ id: user.id })
      .then((user) => {
        if (!user) {
          return res.unauthorized("error.policies.userNotFound");
        }

        req.user = user;

        return proceed();
      })
      .catch((err) => {
        sails.log.error(err);
        return res.serverError("error.policies.serverError");
      });
  })(req, res);
};
