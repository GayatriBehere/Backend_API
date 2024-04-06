import axios from 'axios';
export const homeController = (req, res) => {
    const myResponse = {
        message: "Yes your are at home route",
        success: true,
    }
    res.json(myResponse);
}

export const getUser = (req, res) => {
    const {userid} = req.params;
    console.log(userid);
    res.json({
        userId: userid,
        success: true
    })
}

export const signup = (req, res) => {

    const {fname, lname, email, password} = req.body;

    console.log(fname, lname, email, password);

    res.json({
       message: "Signup successfully",
       success: true
    })
}
export const getGithubDetails = (req, res) => {
    const {username} = req.params;

    const API = `https://api.github.com/users/${username}`;

    axios.get(API)
    .then((response)=>{
        res.json(response.data);
    })
    .catch((err)=>{
        console.log("Error occured while fetching github details: ", err)

        res.status(400).json({
            message: "Error fetching github details",
            success: false
        });
    })  
}