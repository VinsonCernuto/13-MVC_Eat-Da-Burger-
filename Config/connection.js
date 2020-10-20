var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "vrk7xcrab1wsx4r1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "j6uvr2iy8pv9n28k",
        password: "ziq3l5bf4b14xf8w",
        database: "x6mjk1gi8yjg8lh2"
    });
};

// Make connection.
connection.connect();
module.exports = connection;