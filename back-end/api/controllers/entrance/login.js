const jwtToken = require("../../services/jwtToken");

module.exports = {
  friendlyName: "Login",

  description: "Log in using the provided email and password combination.",

  extendedDescription: `This action attempts to look up the user record in the database with the
    specified email address.  Then, if such a user exists, it uses
    bcrypt to compare the hashed password from the database with the provided
    password attempt.`,

  inputs: {
    emailAddress: {
      description: 'The email to try in this attempt, e.g. "irl@example.com".',
      type: "string",
      required: true,
    },

    password: {
      description:
        'The unencrypted password to try in this attempt, e.g. "passwordlol".',
      type: "string",
      required: true,
    },
  },

  exits: {
    success: {
      description: "The requesting user agent has been successfully logged in.",
    },

    badCombo: {
      description: `The provided email and password combination does not
        match any user in the database.`,
      responseType: "unauthorized",
      // ^This uses the custom `unauthorized` response located in `api/responses/unauthorized.js`.
      // To customize the generic "unauthorized" response across this entire app, change that file
      // (see api/responses/unauthorized).
      //
      // To customize the response for _only this_ action, replace `responseType` with
      // something else.  For example, you might set `statusCode: 498` and change the
      // implementation below accordingly (see http://sailsjs.com/docs/concepts/controllers).
    },
  },

  fn: async function ({ emailAddress, password }, exits) {
    // Look up by the email address.
    // (note that we lowercase it to ensure the lookup is always case-insensitive,
    // regardless of which database we're using)
    var userRecord = await User.findOne({
      emailAddress: emailAddress.toLowerCase(),
    });

    // If there was no matching user, respond thru the "badCombo" exit.
    if (!userRecord) {
      throw "badCombo";
    }

    // If the password doesn't match, then also exit thru "badCombo".
    await sails.helpers.passwords
      .checkPassword(password, userRecord.password)
      .intercept("incorrect", "badCombo");

    return exits.success({
      message: "success.entrance.login",
      token: jwtToken.createToken(userRecord),
      user: userRecord,
    });
  },
};
