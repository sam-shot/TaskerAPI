import express from "express";
import connectDB from "./services/db.service.js"
import authRouter from "./router/auth.routes.js";
const app = express();
const PORT = 6001;

app.use(express.json());
app.use("/auth", authRouter);
connectDB().then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.err(err);
});

