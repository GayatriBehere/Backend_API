import express from 'express';

const app = express();

app.get('/', (req, res) => {

    const myResponse = {
        message: "Yes your are at home route",
        success: true,
    }

    res.json(myResponse);
})


app.get('/api/getuser/:userid', (req, res)=>{

    const {userid} = req.params;

    console.log(userid);

    res.json({
        success: true
    })
})


app.listen(3000, ()=>{
    console.log("Server Listening on Port 3000")
})