const https = require('https');
const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 5
https.request('https://www.google.com', res =>{
    res.on('data',() => {});
    res.on('end',() => {
        console.log(Date.now() - start);
    })
}).end();