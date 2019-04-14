const express = require('express');
const path = require('path');
const app = express();

/*app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname,'public','index.html'));
});
*/

// to make the static folder means making access all the folder content access 
app.use(express.static(path.join(__dirname,'public')));

const PORT = process.env.PORT||5000;
app.listen(PORT, ()=> console.log(`server at ${PORT}`));