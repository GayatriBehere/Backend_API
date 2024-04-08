import express from 'express'
import { homeController, signup, getUser,getGithubDetails } from '../controllers/user.js';

const router = express.Router();

router.get('/', homeController);

router.get('/getuser/:userid', getUser);

router.post('/signup', signup);



export default router;