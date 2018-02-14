
var http = require('http');
var puppeteer = require('puppeteer');

http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    run();
    console.log('server..');
    res.end('server running!');

}).listen(process.env.PORT || 8080);

async function run() {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    
    await page.goto('https://github.com');
    await page.screenshot({ path: 'github.png' });
    
    browser.close();

    console.log('screenshot..');
  }
  
// run();

// var server = http.createServer(function(request, response) {

//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.end("Hello World!");

// });

// var port = process.env.PORT || 1337;
// server.listen(port);

// console.log("Server running at http://localhost:%d", port);

// console.log('running');







