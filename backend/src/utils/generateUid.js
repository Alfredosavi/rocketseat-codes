const crypto = require("crypto");

function generateUid() {
  return crypto.randomBytes(4).toString("HEX");
}

module.exports = generateUid;
