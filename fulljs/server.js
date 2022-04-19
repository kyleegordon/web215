import express from 'express';
import config from './config';
import fs from 'fs';
import apiRouter from './api';

const server = express();

//this sets the view engine to EJS
//it will look for these template in a views folder
server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    //this will render the html by passing it the name of the view
    //variable can be passed via the second argument
    res.render('index', {
        content: "..."
    });
});

server.use('/api', apiRouter);

//this is middleware that allows easier access to static resources
//express will automatically find and serve the requested resource
//  as long as the file is in the public folder
server.use(express.static('public'));


//This is one way to send display html file based on url, but using the above option is easier ^^^
// server.get('/about.html', (req, res) => {
//     fs.readFile('./about.html', (err, data) => {
//         res.send(data.toString());
//     });
// });

server.listen(config.port, () => {
    console.info('Express listening on port ', config.port);
});