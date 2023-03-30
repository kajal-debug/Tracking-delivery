const express = require("express");
const app = express();
const server = require('http')
const http = server.createServer(app);
const cors = require("cors");
var nodemailer = require('nodemailer');
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000; 
app.post('/route',(req,res)=>{
    console.log("req",req.body.formValue.tracknumber,req.body.formValue.email)
 

            var transporter = nodemailer.createTransport({
                // host: "smtp.ethereal.email",
                //  port: 587,
                //  secure: false, // true for 465, false for other ports
                host: 'smtp.gmail.com',
                // port: 465,
                port: 587,
                //secure: true,
                // service:"gmail",
                auth: {
                    user: 'kajalbaisakh7@gmail.com', // generated ethereal user
                    //  pass: "Kajalb@96", // generated ethereal password
                    pass: "kootqycpxohqbsaz"
                },
            });
            var mailOption = {
                from: 'kajalbaisakh7@gmail.com',
                to: 'suchismitasini22@gmail.com',
                subject: "Tracking datails",
                text: "Tracking datails",
                html: `<p style="color:black,font-weight:bold">email:${req.body.formValue.email}<br/>
                name:${req.body.formValue.name}<br/>phone:${req.body.formValue.phone}<br/>courier:${req.body.formValue.courier}<br/>
                tracknumber:${req.body.formValue.tracknumber}</p>`
            }
            transporter.sendMail(mailOption, function (err, info) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("email has been send", info.response);
                }
            })
        })
  
    // Connecting to the database
    app.listen(port, () => {
        console.log(`Express Server is started at PORT : ${port}`);
    });