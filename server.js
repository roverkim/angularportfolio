/////////////////////////////////////////////// /*Imports*/ //////////////////////////////////////////////////////////
const express = require('express'); // Server
const bodyParser = require('body-parser'); // Express Middleware
const nodemailer = require('nodemailer');
const CORS = require("cors");
require('dotenv').config();



/////////////////////////////////////////////// /* Initialize Express */ ////////////////////////////////////////////////////////

const APP = express();
const PORT = process.env.PORT || 8080;

/////////////////////////////////////////////// /* Middleware */ //////////////////////////////////////////////////////////

APP.use(bodyParser.json({limit: '50mb'}));
APP.use(bodyParser.urlencoded({limit: '50mb', extended: true})); // Allows For JSON Interactions Between Client & Server
APP.use(express.static("./portfolio/dist")); // Serve Static React Pages
APP.use(bodyParser.text());
APP.use(bodyParser.json({type: "APPlication/vnd.api+json"}));

APP.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
APP.use(CORS());

/////////////////////////////////////////////// /* Email */ //////////////////////////////////////////////////////////

const transporter = nodemailer.createTransport({
 service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});


/////////////////////////////////////////////// /* Routes */ //////////////////////////////////////////////////////////
APP.post("/email", function(req, res) {
    //console.log("email path hit");
    //console.log(req.body);

    let jobMail = {
      from: req.body.email,
      to: process.env.EMAIL_REMINDER,
      subject: `Job Alert From Portfolio Website. From ${req.body.email}`,
      text: req.body.message
    };

    let responseMail = {
      from: 'Ryan Kim',
      to: req.body.email,
      subject: 'Ryan Kim Fullstack Developer',
      html: `<!doctype html><html><head><meta name="viewport" content="width=device-width" /><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><title>Simple Transactional Email</title><style>img{border:none;-ms-interpolation-mode:bicubic;max-width:100%}body{background-color:#f6f6f6;font-family:sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;line-height:1.4;margin:0;padding:0;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}table{border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%}table td{font-family:sans-serif;font-size:14px;vertical-align:top}.body{background-color:#f6f6f6;width:100%}.container{display:block;Margin:0 auto !important;max-width:580px;padding:10px;width:580px}.content{box-sizing:border-box;display:block;Margin:0 auto;max-width:580px;padding:10px}.main{background:#fff;border-radius:3px;width:100%}.wrapper{box-sizing:border-box;padding:20px}.content-block{padding-bottom:10px;padding-top:10px}.footer{clear:both;Margin-top:10px;text-align:center;width:100%}.footer td, .footer p, .footer span, .footer a{color:#999;font-size:12px;text-align:center}h1,h2,h3,h4{color:#000;font-family:sans-serif;font-weight:400;line-height:1.4;margin:0;Margin-bottom:30px}h1{font-size:35px;font-weight:300;text-align:center;text-transform:capitalize}p,ul,ol{font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px}p li, ul li, ol li{list-style-position:inside;margin-left:5px}a{color:#3498db;text-decoration:underline}.btn{box-sizing:border-box;width:100%}.btn>tbody>tr>td{padding-bottom:15px}.btn table{width:auto}.btn table td{background-color:#fff;border-radius:5px;text-align:center}.btn a{background-color:#fff;border:solid 1px #3498db;border-radius:5px;box-sizing:border-box;color:#3498db;cursor:pointer;display:inline-block;font-size:14px;font-weight:bold;margin:0;padding:12px 25px;text-decoration:none;text-transform:capitalize}.btn-primary table td{background-color:#3498db}.btn-primary a{background-color:#3498db;border-color:#3498db;color:#fff}.last{margin-bottom:0}.first{margin-top:0}.align-center{text-align:center}.align-right{text-align:right}.align-left{text-align:left}.clear{clear:both}.mt0{margin-top:0}.mb0{margin-bottom:0}.preheader{color:transparent;display:none;height:0;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;visibility:hidden;width:0}.powered-by a{text-decoration:none}hr{border:0;border-bottom:1px solid #f6f6f6;Margin:20px 0}@media only screen and (max-width: 620px){table[class=body] h1{font-size:28px !important;margin-bottom:10px !important}table[class=body] p, table[class=body] ul, table[class=body] ol, table[class=body] td, table[class=body] span, table[class=body] a{font-size:16px !important}table[class=body] .wrapper, table[class=body] .article{padding:10px !important}table[class=body] .content{padding:0 !important}table[class=body] .container{padding:0 !important;width:100% !important}table[class=body] .main{border-left-width:0 !important;border-radius:0 !important;border-right-width:0 !important}table[class=body] .btn table{width:100% !important}table[class=body] .btn a{width:100% !important}table[class=body] .img-responsive{height:auto !important;max-width:100% !important;width:auto !important}}@media all{.ExternalClass{width:100%}.ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div{line-height:100%}.apple-link a{color:inherit !important;font-family:inherit !important;font-size:inherit !important;font-weight:inherit !important;line-height:inherit !important;text-decoration:none !important}.btn-primary table td:hover{background-color:#34495e !important}.btn-primary a:hover{background-color:#34495e !important;border-color:#34495e !important}}</style></head><body class=""><table border="0" cellpadding="0" cellspacing="0" class="body"><tr><td>&nbsp;</td><td class="container"><div class="content"> <span class="preheader">Ryan Kim Fullstack Developer</span><table class="main"><tr><td class="wrapper"><table border="0" cellpadding="0" cellspacing="0"><tr><td><p>Hi there,</p><p>Thank you for reaching out to me. Please allow me up to 5 days to get back to you.</p><p>Should you need to get in touch with me at an earlier time, please contact me at +65(933)-981-61</p> </br><p> Sincerely,</p><p> Ryan Kim</p></td></tr></table></td></tr></table><div class="footer"><table border="0" cellpadding="0" cellspacing="0"><tr><td class="content-block"> <a href="http://ryankimdeveloper.com">ryankimdeveloper.com</a>.</td></tr><tr><td class="content-block powered-by"> Powered by <a href="http://htmlemail.io">Html & ☕</a>.</td></tr></table></div></div></td><td>&nbsp;</td></tr></table></body></html>`
    };

    transporter.sendMail(responseMail, function(error, info){
      if (error) {
        //console.log(error);
        res.json({status: 'failed', sender: jobMail.to})
      } else {
        //console.log(`Email sent to $(jobMail.to) ` + info.response);
        res.json({status: 'passed', sender: jobMail.to})
      }
    });

    transporter.sendMail(jobMail, function(error, info){
      if (error) {
        //console.log(error);
      } else {
        //console.log(`Email sent to $(jobMail.to) ` + info.response);
      }
    });


});


/////////////////////////////////////////////// /* Start Server */ ////////////////////////////////////////////////////////

APP.listen(PORT, (error) => {
  if (!error) {
    //console.log("listening on port", PORT);
  } else {
    console.error(error)
    throw error;
  }
});
