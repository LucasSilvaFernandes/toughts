const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("toughts2", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("successfully connected");
} catch (err) {
  console.log(`Unable to connect: ${err}`);
}

module.exports = sequelize
