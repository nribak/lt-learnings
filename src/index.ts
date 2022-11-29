import app from "./app";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";

require('dotenv').config()

const mongoUri = `${process.env.ATLAS_ENDPOINT}/${process.env.ATLAS_TABLE}`;
const port = process.env.PORT || 4000
mongoose.connect(mongoUri).then(() => {
    console.log('MongoDB is connected');
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(require('./swagger_output.json')));

app.listen(port,() => console.log(`posts service running: ${port}`));
