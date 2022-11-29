import express from "express";
import router from "./newsletter/route";
import {loggerMiddleware} from "./middlewares";

const app = express();
app.use(express.json());

app.use(loggerMiddleware);

app.use('/news', router);

export default app;
