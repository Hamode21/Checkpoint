const http = require('http');
const PORT = 4325;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});


server.listen(PORT, function(error) {
    if (error){
        console.log ('error',error)
    }
    else{
    console.log(`Server running at http://localhost:${PORT}/`);
    }
});
