const express = require('express');

module.exports= function(options={})
{
     const router = express.Router();

     const {service} = options;

     router.get('/greet',(req, res, net) =>
     {
        res.end(
            service.createGreeting(req.query.name || 'Stranger')
        );

     });
     return router;
}

module.exports= function(options={})
{
     const router = express.Router();

     const {koranku} = options;

     router.get('/greet2',(req, res, net) =>
     {
        res.end(
            koranku.createGreeting(req.query.name || 'manja')
        );

     });
     return router;
}