const express = require("express");
const app = express();
const server = require('http')
const http = server.createServer(app);
const cors = require("cors");
const axios = require('axios');
const fs = require("fs");
const router = express.Router();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000; 
app.get('/rote',()=>{})
    // Connecting to the database
    app.listen(port, () => {
        console.log(`Express Server is started at PORT : ${port}`);
    });