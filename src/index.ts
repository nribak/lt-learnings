import app from "./app";
import mongoose from "mongoose";

require('dotenv').config()

const mongoUri = `${process.env.ATLAS_ENDPOINT}/${process.env.ATLAS_TABLE}`;
// const port = parseInt(process.env.EXPRESS_PORT!);
const port: any = process.env.EXPRESS_PORT || process.env.PORT || 80;
const host = process.env.YOUR_HOST || `0.0.0.0`;
mongoose.connect(mongoUri).then(() => {
    console.log('MongoDB is connected');
});
app.listen(port, host,() => console.log(`posts service running: ${port}`));
