
var http = require('http');
var puppeteer = require('./node_modules/puppeteer/lib/Puppeteer');

http.createServer(async function (req, res) {
    
    const browser = await puppeteer.launch();

    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    res.end('server running!');

}).listen(process.env.PORT || 8080);

async function run() {
    try {
        const browser = await puppeteer.launch({headless: false});
        // const page = await browser.newPage();
        
        // await page.goto('https://github.com');
        // await page.screenshot({ path: 'github.png' });
        
        browser.close();
    
    } catch (error){

    }
    
  }
  

// // var server = http.createServer(function(request, response) {

// //     response.writeHead(200, {"Content-Type": "text/plain"});
// //     response.end("Hello World!");

// // });

// // var port = process.env.PORT || 1337;
// // server.listen(port);

// // console.log("Server running at http://localhost:%d", port);

// // console.log('running');







