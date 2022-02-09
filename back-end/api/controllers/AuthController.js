var passport = require("passport");

module.exports = {
  localAuth: (req, res) => {
    passport.authenticate("local", {}, (err, user, info) => {
      if (err || !user) {
        return res.status(401).send({
          code: "E_ERROR",
          message: info.message,
          user: user,
          error: true,
        });
      }

      // if(!user.isActive){
      //     return res.status(401).send({
      //         notActivate: true,
      //         message: "error_messages.user_not_activated"
      //     })
      // }

      req.logIn(user, (err) => {
        if (err) return res.status(401).send(err);
        req.user = user;

        return res.send({
          message: info.message,
          token: jwtToken.createToken(user),
          user: user,
          error: false,
        });
      });
    })(req, res);
  },
};
