/**
 * This file is useful when you want to execute some code before
 * and after running your tests (e.g. lifting and lowering your
 * Sails application). Since your models are converted to Waterline
 * collections on lift, it is necessary to lift your Sails app before
 * trying to test them (this applies controllers and other parts of
 * your app, too, so be sure to call this file first).
 */

var sails = require("sails");

// Before running any tests...
before(function (done) {
  // Increase the Mocha timeout so that Sails has enough time to lift, even if you have a bunch of assets.
  this.timeout(5000);

  sails.lift(
    {
      // Your Sails app's configuration files will be loaded automatically,
      // but you can also specify any other special overrides here for testing purposes.

      // For example, we might want to skip the Grunt hook,
      // and disable all logs except errors and warnings:
      // hooks: { grunt: false },
      log: { level: "warn" },
    },
    function (err) {
      if (err) {
        return done(err);
      }

      // here you can load fixtures, etc.
      // (for example, you might want to create some records in the database)

      return done();
    }
  );
});

// After all tests have finished...
after(function (done) {
  // here you can clear fixtures, etc.
  // (e.g. you might want to destroy the records you created above)
  // await User.destroy({
  //   emailAddress: {
  //     contains: "test",
  //   },
  // });
  sails.lower(done);
});
