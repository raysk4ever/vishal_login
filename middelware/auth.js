const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Access denied. No token Provied.");

  try {
    const decoded = jwt.verify(token, "MYPRIVATEKEY");
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send("invaid token");
  }
};
