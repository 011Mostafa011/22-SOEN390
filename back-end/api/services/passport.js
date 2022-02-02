const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(async (user, done) => {
  try {
    const user = User.findOne({ emailAddress: user.emailAddress }).fetch();
    done(null, user);
  } catch (error) {
    done(error, false);
  }
});

passport.use(
  "jwt",
  new JwtStrategy(
    {
      secretOrKey: sails.config.jwtSettings.secret,
      issuer: sails.config.jwtSettings.issuer,
      audience: sails.config.jwtSettings.audience,
      jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("JWT"),
      passReqToCallback: false,
    },
    (payload, next) => {
      return next(null, payload.user);
    }
  )
);
