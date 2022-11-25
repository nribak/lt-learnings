import app from "./app";
import mongoose from "mongoose";

require('dotenv').config()

const mongoUri = `${process.env.ATLAS_ENDPOINT}/${process.env.ATLAS_TABLE}`;
const port = process.env.PORT || 4000
mongoose.connect(mongoUri).then(() => {
    console.log('MongoDB is connected');
});
app.listen(port,() => console.log(`posts service running: ${port}`));
