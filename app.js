const express = require('express');
const greetMiddleWare = require('./greet.js');

class GreetingService{
    constructor(greeting = 'hello')
    {
        this.greeting = greeting;

    }

    createGreeting(name)
    {
        return `${this.greeting}, ${name}!`;
    }
}

express().use('/api/v1/service1', greetMiddleWare({service: new GreetingService('Sasiya'),}))
.use('/api/v1/service2', greetMiddleWare({koranku: new GreetingService('Holaman'),}))
.listen(3000);

