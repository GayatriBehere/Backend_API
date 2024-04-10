import express from 'express'
import { getGithubDetails,CountryDetail,WeatherDetails,YoutubeDetails } from '../controllers/task.js';

const router = express.Router();



router.get('/getdata/:username', getGithubDetails);
router.get('/data/:countryname',CountryDetail);
router.get('/data2/:city',WeatherDetails);
router.get('/data3/:keyword',YoutubeDetails);
export default router;
