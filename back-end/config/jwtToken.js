module.exports.jwtSettings = {
    expiresIn: 15552000,
    secret: '0jy3KEvhtIIOfFsXjRLOee06abFbaHcIrawweT1CQ66foIYBluqfW3qwY40dXUq',
    algorithm: 'HS256',
    issuer: process.env.BASE_URL ? process.env.BASE_URL : 'http://localhost:1337',
    audience: process.env.BASE_URL ? process.env.BASE_URL : 'http://localhost:1337',
};
