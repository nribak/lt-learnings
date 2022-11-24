import app from "./app";
import mongoose from "mongoose";

const mongoUri = "mongodb+srv://nribak:1q2w3e4r@cluster0.pxy1i.mongodb.net/learnings?retryWrites=true&w=majority";
const port = 4000;

mongoose.connect(mongoUri).then(() => {
    console.log('MongoDB is connected');
});
app.listen(port, () => console.log(`posts service running: ${port}`));
