module.exports = {
  friendlyName: "Me",
  description: "Me user.",

  inputs: {},

  exits: {
    notLoggedIn: {
      responseType: "unauthorized",
    },
  },

  fn: async function () {
    if (this.req.user) {
      return User.findOne({ id: this.req.user.id });
    } else throw "notLoggedIn";
  },
};
