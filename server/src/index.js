const { request, response } = require('express');
const express = require('express');
const routes = require('./routes')
const cors = require('cors');

const port = process.env.PORT || 3333;
const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)

app.use((req, res, next) => {
    res.status(404).send('<h1> Page not found </h1>');
});

app.listen(port, () => {
    console.log(`server runing on port ${port}`);
})