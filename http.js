const http = require('http');
const url = require('url');
const qs = require('querystring');

http.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);


})

//     if (req.method === 'GET') {
//         // Handle GET request - extract query parameters
//         let qry = url.parse(req.url, true).query;
//         console.log("GET request params: ", qry.id, qry.title);
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.write("GET request received. Node Server started....\n");
//         res.end();
//     } else if (req.method === 'POST') {
//         // Handle POST request
//         let data = "";

//         req.on('data', (chunk) => {
//             data += chunk;
//         });

//         req.on('end', () => {
//             try {
//                 // If content-type is 'application/x-www-form-urlencoded'
//                 if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
//                     let obj = qs.parse(data);
//                     console.log("POST (url-encoded): ", obj.title, obj.description);
//                 } 
//                 // If content-type is 'application/json'
//                 else if (req.headers['content-type'] === 'application/json') {
//                     let obj = JSON.parse(data);
//                     console.log("POST (JSON): ", obj.title, obj.description);
//                 }
//                 res.writeHead(200, { 'Content-Type': 'text/plain' });
//                 res.write("POST request received. Node Server started....\n");
//                 res.end();
//             } catch (error) {
//                 console.error("Error parsing JSON:", error);
//                 res.writeHead(400, { 'Content-Type': 'text/plain' });
//                 res.write("Invalid JSON data.\n");
//                 res.end();
//             }
//         });
//     } else {
//         res.writeHead(405, { 'Content-Type': 'text/plain' });
//         res.write("Method not allowed\n");
//         res.end();
//     }
// }).listen(4000, () => console.log("Server has started on port: 4000"));
