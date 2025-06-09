const http = require('http'); 
const fs = require('fs').promises;
const PORTA = 3000

http.createServer((req, res) => {   
    console.log("Recebi uma requisição...");
     
    fs.readFile(__dirname + "/teste.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });                                                                 // 3. Tell the server that all of the response headers and body have been sent
}).listen(PORTA);                                                                        // 4. Tells the server what port to be on