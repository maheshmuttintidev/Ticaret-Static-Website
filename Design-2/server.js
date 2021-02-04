const http = require('http')

const server = http.createServer( function (req, res) {
    req.on('data', function (data) {

    })
    req.on('end', function() {
        res.setHeader('Content-Type', 'application/json')
        res.setHeader('Access-Control-Allow-Origin','*')
        res.writeHead(200,'ok')

        res.end('{"data": "Just a plain old json reply"}')
    })
})
server.listen(3000, (err) => {
    if(err) {
        console.log("bad things")
        return
    }
    console.log("listen on port 3000")
})