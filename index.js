
var http = require('http');
var puppeteer = require('puppeteer');

// var server = http.createServer(function(request, response) {

//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.end("Hello World!");

// });

// var port = process.env.PORT || 1337;
// server.listen(port);

// console.log("Server running at http://localhost:%d", port);

// console.log('running');

(async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://example.com');
    // await page.screenshot({path: 'example.png'});    
    await browser.close();
    console.log('screenshot taken successfully..');
  })();


http.createServer(function (req, res) {
    
    
    // res.end('Hello, world!');

    (async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://example.com');
    // await page.screenshot({path: 'example.png'});    
    await browser.close();
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('screenshot created!');
    })(); 

}).listen(process.env.PORT || 8080);


