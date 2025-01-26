import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import routes from './routes/index.js';

dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running in localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send(`Server is running in localhost:${PORT}`);
});

app.use("/api", routes);