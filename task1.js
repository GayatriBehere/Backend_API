import express from 'express';
import {arr} from './array.js'
const app = express();

import path from 'path';
import { fileURLToPath } from 'url';



// Get the directory name using import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.get('/', (req, res) => {
    const myResponse = {
        message: "Yes, you are at the home route",
        success: true,
    }
    res.json(myResponse);
});

app.get('/api/getuser/:userid', (req, res) => {
    const { userid } = req.params;
    const i = parseInt(userid) - 1;
    if (i >= 0 && i < arr.length) {
        res.json({
            success: true,
            user: arr[i]
        });
    } else {
        const myResponse = {
            message: "incorrect userid",
           
        }
        res.json(myResponse);
    }
});

//html file
\


app.get('/api/htmlpage', (req, res) => {
    const filePath = path.join(__dirname, 'abc.html');
    res.sendFile(filePath);
});
app.listen(3000, () => {
    console.log("Server Listening on Port 3000");
});
