const http = require('http');                                                    // Loads the http module 
http.createServer((request, response) => {    
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });   
                                                                               // 1. Tell the browser everything is OK (Status code 200), and the data is in plain text
    response.write('<h1>Hello, '+Math.pow(3, 1)+'o ano!<\h1>\n');                                // 2. Write the announced text to the body of the page    
    response.end();                                                                 // 3. Tell the server that all of the response headers and body have been sent
}).listen(1337);                                                                        // 4. Tells the server what port to be on