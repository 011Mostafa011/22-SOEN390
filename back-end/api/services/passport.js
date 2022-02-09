const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const userRepository = require("../repositories/UserRepository");

// Passport session setup.
// To support persistent login sessions, Passport needs to be able to
// serialize users into and deserialize users out of the session. Typically,
// this will be as simple as storing the user ID when serializing, and finding
// the user by ID when deserializing.
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(async (user, done) => {
  user = await User.findOne({ emailAddress: user.emailAddress });
  done(null, user);
});

// Use the LocalStrategy within Passport.
// Strategies in passport require a `verify` function, which accept
// credentials (in this case, a username and password), and invoke a callback
// with a user object.
passport.use(
  "local",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    (email, password, done) => {
      process.nextTick(() => {
        userRepository
          .findByEmail(email)
          .then(async (user) => {
            if (user) {
              try {
                await sails.helpers.passwords
                  .checkPassword(password, user.password)
                  .intercept("incorrect", () => {
                    return done(null, false, {
                      message: "Invalid Password",
                    });
                  });

                return done(null, user, {
                  message: "Logged In Successfully",
                });
              } catch (error) {
                console.log(
                  "Error: passport - saisl.helpers.passwords.checkPassword",
                  err
                );

                return done(null, false, {
                  message: "An error occured",
                });
              }
            } else {
              return done(null, false, {
                message: "Unknown user " + email,
              });
            }
          })
          .catch((err) => {
            console.log("Error: passport - findByEmail", err);
            return done(null, err);
          });
      });
    }
  )
);

// Use the JwtStrategy within Passport.
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
    async (payload, next) => {
      await User.findOne({ id: payload.user.id })
        .then((user) => {
          return next(null, user, {});
        })
        .catch((err) => {
          return next(err, undefined, {});
        });
    }
  )
);
