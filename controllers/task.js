import fs from 'fs';
import path from 'path';

import axios from 'axios';
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


export const CountryDetail = (req, res) => {
    const {countryname} = req.params;

    const API = `https://restcountries.com/v3.1/name/${countryname}`;

    axios.get(API)
    .then((response)=>{
        
        const name = response.data[0].name;
        res.json(name);
        
    })
    .catch((err)=>{
        console.log("Error occured while fetching CountryName: ", err)

        res.status(400).json({
            message: "Error fetching github details",
            success: false
        });
    })  
}


export const WeatherDetails = (req, res) => {
    const { city } = req.params;

    const API = `https://api.openweathermap.org/data/2.5/weather?units=metric&lang=hi&q=${city}&appid=7bb9b35cc693855543828b7927f507f0`;

    axios.get(API)
        .then((response) => {
            const { weather } = response.data;
            const { id, main, description, icon } = weather[0];

            // Construct HTML content with weather details in a table format
            const htmlContent = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Weather Details</title>
                    <style>
                        table {
                            border-collapse: collapse;
                            width: 100%;
                        }
                        th, td {
                            border: 1px solid black;
                            padding: 8px;
                            text-align: left;
                        }
                        th {
                            background-color: #f2f2f2;
                        }
                    </style>
                </head>
                <body>
                    <h2>Weather Details for ${city}</h2>
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>Main</th>
                            <th>Description</th>
                            <th>Icon</th>
                        </tr>
                        <tr>
                            <td>${id}</td>
                            <td>${main}</td>
                            <td>${description}</td>
                            <td>${icon}</td>
                        </tr>
                    </table>
                </body>
                </html>
            `;

            // Send HTML content as the response
            res.send(htmlContent);
        })
        .catch((err) => {
            console.log("Error occurred while fetching weather details: ", err);

            res.status(400).json({
                message: "Error fetching weather details",
                success: false
            });
        });
}