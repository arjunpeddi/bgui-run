
var http = require('http');
var puppeteer = require('puppeteer');

http.createServer(function (req, res) {

    (async() => { 
        
        try{
            const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
            browser.close();
        }catch(error) {
            res.writeHead(403, { 'Content-Type': 'text/html' });
            res.end('error: '+error);
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('server running! on node version: '+process.version); 
    })();

    // executablePath: './node_modules/puppeteer/.local-chromium/win64-526987/chrome-win32/chrome.exe'

    // (async() => { 
    //     try {
        
    //         await 1;
    //     // const browser = await puppeteer.launch({ headless: false});
    //     // const page = await browser.newPage();
    //     // await page.goto('http://example.com');
    //     // await page.screenshot({path: 'example.png'});
    //     // await browser.close();
    //     }catch(error) {
    //         res.writeHead(403, { 'Content-Type': 'text/html' });
    //         res.end('error: '+error);
    //     }
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.end('server running! on node version: '+process.version); 
    // })();

}).listen(process.env.PORT || 8080);

// async function run() {
//     try {
//         const browser = await puppeteer.launch();
//         // const page = await browser.newPage();
        
//         // await page.goto('https://github.com');
//         // await page.screenshot({ path: 'github.png' });
        
//         browser.close();
    
//     } catch (error){

//     }
    
//   }
  

// // var server = http.createServer(function(request, response) {

// //     response.writeHead(200, {"Content-Type": "text/plain"});
// //     response.end("Hello World!");

// // });

// // var port = process.env.PORT || 1337;
// // server.listen(port);

// // console.log("Server running at http://localhost:%d", port);

// // console.log('running');







