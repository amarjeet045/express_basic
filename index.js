const express = require('express');
const path = require('path');

const members  =require('./members');
//const moment = require('moment');//this is used for getting the time and date format
const app = express();

/*app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname,'public','index.html'));
});
*/
// basic middleware
const logger = (req, res, next) => {
    console.log(
      `${req.protocol}://${req.get('host')}${
        req.originalUrl
      }`
    );
    next();
  };

  //init middleware
  app.use(logger);


app.get('/api/members',(req,res) => {
    res.json(members);


});

// to make the static folder means making access all the folder content access 
//app.use(express.static(path.join(__dirname,'public')));

const PORT = process.env.PORT||5000;
app.listen(PORT, ()=> console.log(`server at ${PORT}`));