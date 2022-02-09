/**
 * User.js
 *
 * A user who can log in to this application.
 */

module.exports = {
  attributes: {
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    emailAddress: {
      type: "string",
      required: true,
      unique: true,
      isEmail: true,
      maxLength: 200,
      example: "mary.sue@example.com",
    },

    emailStatus: {
      type: "string",
      isIn: ["unconfirmed", "change-requested", "confirmed"],
      defaultsTo: "unconfirmed",
      description: "The confirmation status of the user's email address.",
      extendedDescription: `Users might be created as "unconfirmed" (e.g. normal signup) or as "confirmed" (e.g. hard-coded
admin users).  When the email verification feature is enabled, new users created via the
signup form have \`emailStatus: 'unconfirmed'\` until they click the link in the confirmation email.
Similarly, when an existing user changes their email address, they switch to the "change-requested"
email status until they click the link in the confirmation email.`,
    },

    emailChangeCandidate: {
      type: "string",
      isEmail: true,
      description:
        "A still-unconfirmed email address that this user wants to change to (if relevant).",
    },

    password: {
      type: "string",
      required: true,
      description:
        "Securely hashed representation of the user's login password.",
      protect: true,
      example: "2$28a8eabna301089103-13948134nad",
    },

    firstName: {
      type: "string",
      required: true,
      description: "User's first name.",
      maxLength: 120,
      example: "Mary",
    },

    lastName: {
      type: "string",
      required: true,
      description: "User's last name.",
      maxLength: 120,
      example: "Sue van der McHenst",
    },

    fullName: {
      type: "string",
      required: false,
      description: "Full representation of the user's name.",
      maxLength: 240,
      example: "Mary Sue van der McHenst",
    },

    accountType: {
      type: "string",
      isIn: ["client", "admin", "doctor"],
      defaultsTo: "client",
      description:
        "Type of account deciding wether user will be granted extra permissions, etc.",
      extendedDescription: `Admins and doctors might have extra permissions, see a different default home page when they log in,
        or even have a completely different feature set from normal users.`,
    },

    passwordResetToken: {
      type: "string",
      description:
        "A unique token used to verify the user's identity when recovering a password.  Expires after 1 use, or after a set amount of time has elapsed.",
    },

    passwordResetTokenExpiresAt: {
      type: "number",
      description:
        "A JS timestamp (epoch ms) representing the moment when this user's `passwordResetToken` will expire (or 0 if the user currently has no such token).",
      example: 1502844074211,
    },

    emailProofToken: {
      type: "string",
      description:
        "A pseudorandom, probabilistically-unique token for use in our account verification emails.",
    },

    emailProofTokenExpiresAt: {
      type: "number",
      description:
        "A JS timestamp (epoch ms) representing the moment when this user's `emailProofToken` will expire (or 0 if the user currently has no such token).",
      example: 1502844074211,
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
    // n/a

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    // n/a
  },

  customToJSON: function () {
    return _.omit(this, [
      "password",
      "emailChangeCandidate",
      "passwordResetToken",
      "passwordResetTokenExpiresAt",
      "emailProofToken",
      "emailProofTokenExpiresAt",
    ]);
  },

  beforeCreate: function (user, callback) {
    if (user.firstName && user.lastName) {
      user.fullName = user.firstName + " " + user.lastName;
    }

    user.emailAddress = user.emailAddress.toLowerCase();

    callback(null, user);
  },
};
