import colors from 'colors/safe';
import express from 'express';
import router from "./newsletter/route";

const port = 4000;

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    console.log(colors.green(req.method) + ':', colors.bgGreen(req.url));
    next();
});

app.use('/news', router);

app.listen(port, () => console.log(`posts service running: ${port}`));
