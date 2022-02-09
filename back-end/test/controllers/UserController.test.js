var supertest = require("supertest");

describe("UserController.create", function () {
  describe("#create()", function () {
    it("should create user", function (done) {
      supertest(sails.hooks.http.app)
        .post("/api/user")
        .send({
          emailAddress: "usercontroller.test@test.com",
          password: "test",
          firstName: "Test",
          lastName: "Test",
        })
        .expect(200, async () => {
          await User.destroy({ emailAddress: "usercontroller.test@test.com" });
          done();
        });
    });
  });
});
