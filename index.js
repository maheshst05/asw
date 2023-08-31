const express =  require('express');
const app = express();
app.use(express.json());
require('dotenv').config()

app.get('/', async(req,res)=>{
    try {
    res.send("wel-come")
    } catch (error) {
        
    }
})

app.listen(process.env.PORT,async ()=>{
    console.log('listening on port '+process.env.PORT);
})