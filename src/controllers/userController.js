import dbConnection from "../config/db.js";
import dotenv from "dotenv";

dotenv.config();

async function getUsers(req, res) {
    try {
        const [users] = await dbConnection.promise().query(`SELECT * FROM users`);

        if (users && users.length > 0) {
            console.log(users);
            return res.status(201).send({
                message: "Data found with successfully in the database",
                success: true,
                data: users
            })
        }

        return res.status(404).send({
            message: "Data not found in the database",
            success: false,
            data: []
        })
    } catch (error) {
        console.error(error);
        return res.status(500 || error.status).send({
            message: "An error occurred while getting the data in the database",
            success: false,
            error: error
        });
    }
}

async function getUser(req, res) {
    try {
        const { email } = req.query;
        const [item] = await dbConnection.promise().query('SELECT * FROM users WHERE email = ?', email);

        if (item && item.length > 0) {
            console.log(item);
            return res.status(201).send({
                message: "Data found with successfully in the database",
                success: true,
                data: item
            })
        }

        return res.status(404).send({
            message: "Data not found in the database",
            success: false,
            data: []
        })
    } catch (error) {
        console.error(error);
        return res.status(500 || error.status).send({
            message: "An error occurred while getting the data in the database",
            success: false,
            error: error
        });
    }
}

async function createUser(req, res) {
    try {
        const { email, name } = req.body;

        const [result] = await dbConnection.promise().query('INSERT INTO users (email, nome) VALUES (?, ?)', [email, name]);

        return res.status(201).send({
            message: "Data saved successfully in the database",
            success: true
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            message: "An error occurred while saving the data in the database",
            success: false,
            error: error.message || error
        });
    }
}

export {
    getUser,
    getUsers,
    createUser
}