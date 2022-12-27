import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('This is a test web page!');
})

app.listen(1620, () => {
    console.log('The application is listening on port 1620!');
})