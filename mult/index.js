const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = 80;

const app = express();
app.use(bodyParser.json());

 app.get('/multiplicacao/:num1/:num2', (req, res) => {
    const result  = {
         res : req.params.num1 * req.params.num2
    }
     res.send(result);
     console.log(result);
});

 console.log(`Aplicação rodando na porta ${port}`);
 app.listen(port);


