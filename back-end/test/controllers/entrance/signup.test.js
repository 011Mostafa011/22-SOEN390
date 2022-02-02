// test/integration/controllers/entrance/signup.test.js
var supertest = require("supertest");

describe("entrance.signup", function () {
  describe("#signup()", function () {
    it("should signup user and return code 200", function (done) {
      supertest(sails.hooks.http.app)
        .post("/api/v1/entrance/signup")
        .send({
          emailAddress: "test@test.com",
          password: "test",
          fullName: "Tester test",
        })
        .expect(200)
        .end(function (err, res) {
          if (err) done(err);
          else done();
        });
    });

    it("should signup user with same email and return code 409", function (done) {
      supertest(sails.hooks.http.app)
        .post("/api/v1/entrance/signup")
        .send({
          emailAddress: "test@test.com",
          password: "test",
          fullName: "Tester test",
        })
        .expect(409)
        .end(function (err, res) {
          if (err) done(err);
          else done();
        });
    });
  });
});
