const express = require('express');
let app = express()
const appid = process.env.APPID
// const corsRoute = require('./cors')
// const cors = require('cors');
// app.use("/cors",corsRoute);

// var allowlist = ['http://example1.com', 'http://example2.com']
// var corsOptionsDelegate = function (req, callback) {
//   var corsOptions;
//   if (allowlist.indexOf(req.header('Origin')) !== -1) {
//     corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
//   } else {
//     corsOptions = { origin: false } // disable CORS for this request
//   }
//   callback(null, corsOptions) // callback expects two parameters: error and options
// }

// app.get('/products/:id', cors(corsOptionsDelegate), function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for an allowed domain.'})
// })
app.get('/',(req,res)=>{
  res.send(`App Id: ${appid}; Hi!!`)
})
app.listen(9999, function () {
  console.log('CORS-enabled web server listening on port 80')
})
