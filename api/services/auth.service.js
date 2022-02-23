const jwt = require('jsonwebtoken');

const secret = process.env.NODE_ENV === 'production' ? process.env.JWT_SECRET : 'thisismysecret';

const authService = () => {
  console.log(`process.env.NODE_ENV - ${process.env.NODE_ENV}, process.env.JWT_SECRET - ${process.env.JWT_SECRET} , secret = ${secret}`);
  const issue = (payload) => jwt.sign(payload, secret, { expiresIn: 10800 });
  const verify = (token, cb) => jwt.verify(token, secret, {}, cb);

  return {
    issue,
    verify,
  };
};

module.exports = authService;
