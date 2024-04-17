import express from "express";
import connectDB from "./services/db.service.js"
const app = express();
const PORT = 3000;

app.use(express.json());

connectDB().then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.err(err);
});

