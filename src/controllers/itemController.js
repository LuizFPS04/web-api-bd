import dbConnection from "../config/db.js";
import dotenv from "dotenv";

dotenv.config();

async function getItems(req, res) {
    try {
        const [items] = await dbConnection.promise().query(`SELECT * FROM items`);

        if (items && items.length > 0) {
            console.log(items);
            return res.status(201).send({
                message: "Data found with successfully in the database",
                success: true,
                data: items
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

async function getItem(req, res) {
    try {
        const { id } = req.params;
        const [item] = await dbConnection.promise().query('SELECT * FROM items WHERE id = ?', id);

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

async function createItem(req, res) {
    try {
        const { name, price } = req.body;

        const [result] = await dbConnection.promise().query('INSERT INTO items (nome, valor) VALUES (?, ?)', [name, price]);

        return res.status(201).send({
            message: "Data saved successfully in the database",
            success: true,
            id: result.insertId
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
    getItems,
    getItem,
    createItem
}