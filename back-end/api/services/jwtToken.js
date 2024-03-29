const jwt = require('jsonwebtoken');

module.exports = {
    secret: sails.config.jwtSettings.secret,
    issuer: sails.config.jwtSettings.issuer,
    audience: sails.config.jwtSettings.audience,

    /**
     * Create a token based on the passed user
     * @param user
     */
    createToken: function (user) {
        return jwt.sign(
            {
                user: {
                    id: user.id,
                },
            },
            sails.config.jwtSettings.secret,
            {
                algorithm: sails.config.jwtSettings.algorithm,
                expiresIn: sails.config.jwtSettings.expiresIn,
                issuer: sails.config.jwtSettings.issuer,
                audience: sails.config.jwtSettings.audience,
            },
        );
    },
};
