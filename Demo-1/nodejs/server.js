const express = require('express');
const router = express.Router();
const app = express();

router.get('/', (req,res) => {
    res.send(`Hello from: ${req.headers.host}`);
});

app.use('/', router);

app.listen(process.env.PORT, () => {
    console.log(`App is listening at ${process.env.PORT}`);
});