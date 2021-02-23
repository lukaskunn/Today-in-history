const { Router } = require('express');
const axios = require('axios');

const routes = Router();

routes.get('/', async (request, response) => {
    const data = await axios.get('https://vast-savannah-48666.herokuapp.com/date')

    return response.send(data.data);
});

routes.get('/:month/:day', async (request, response) => {
    const month = request.params.month;
    const day = request.params.day

    const data = await axios.get(`https://vast-savannah-48666.herokuapp.com/${month}/${day}`)

    return response.send(data.data);
});

module.exports = routes;