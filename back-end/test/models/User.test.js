var chai = require("chai");
var expect = chai.expect;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

describe("User (model)", function () {
  describe("#lifecycles", function () {
    it("should create a user", function (done) {
      User.create({
        emailAddress: "test@test.com",
        password: "test",
        firstName: "Test",
        lastName: "Test",
      })
        .then((user) => {
          return done();
        })
        .catch((error) => {
          return done(new Error(error));
        });
    });

    it("should try to create user and return USER_ALREADY_EXIST", function () {
      return expect(
        User.create({
          emailAddress: "test@test.com",
          password: "test",
          firstName: "Test",
          lastName: "Test",
        })
      ).to.be.rejectedWith({
        code: "USER_ALREADY_EXIST",
        message: "User already exist",
      });
    });

    it("should delete the created user", function (done) {
      User.destroy({ emailAddress: "test@test.com" })
        .then((user) => {
          return done();
        })
        .catch((error) => {
          return done(new Error(error));
        });
    });
  });
});
