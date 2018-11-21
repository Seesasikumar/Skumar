const exprs = require('express');
const app = exprs();

app.get('/', (req, res)=>{
res.send('Hello this is sasi on express ..nodemon')

});

app.get('/api/hello',(req, res)=> {
    res.send("Here to say you hello..man..");
});

app.get('/api/hello/:year/:month',(req, res)=> {
   res.send(req.query);
});

//Port

const port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log(`Listening port ${port}`)});