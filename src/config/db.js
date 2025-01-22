import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const dbConnection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

dbConnection.connect(err => {
    if (err) {
        console.log(`Error in connect database: ${err}`);
        return;
    }
    console.log(`Application connected with database`);
})

export default dbConnection;