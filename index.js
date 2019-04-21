const express = require('express');
const path = require('path');
//const logger = require('./middleawre/logger');
//const members  =require('./members');

//this is used for getting the time and date format
const app = express();

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Homepage Route
app.get('/', (req, res) =>
  res.render('index', {
    title: 'Member App'
  
  })
);

/*app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname,'public','index.html'));
});
*/
// basic middleware



  //init middleware
  //app.use(logger);

/*
app.get('/api/members',(req,res) => {
    res.json(members);

    

});
app.get('/api/members/:id',(req,res) => {
  //res.send(req.params.id);
  //this is for the getting information about the getting information of the user
  //when id is taken as an input
    //res.json(members.filter(member => member.id === parseInt(req.params.id)));
//for the whole process like we get result and error also
const found =members.some(member => member.id === parseInt(req.params.id)) ;
if (found){
  res.json(members.filter(member => member.id === parseInt(req.params.id)));
}
else{
  res.status(400).json({msg :'Members Not Found'});
}

});
*/

// to make the static folder means making access all the folder content access 
app.use(express.static(path.join(__dirname,'public')));
//members api routes
app.use('/api/members',require('./routes/api/members'));

const PORT = process.env.PORT||5000;
app.listen(PORT, ()=> console.log(`server at ${PORT}`));