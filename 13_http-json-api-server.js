var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
	var urlinfo = url.parse(req.url, true);
	var path = urlinfo.pathname;
	var time = new Date(urlinfo.query.iso);
	var result;

	if (path === '/api/parsetime') {
		result = {
			hour: time.getHours(),
			minute: time.getMinutes(),
			second: time.getSeconds()
		}
	} else if (path === '/api/unixtime') {
		result = {
			unixtime: time.getTime()
		}
	}

	if (result) {
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify(result));
	} else {
		res.writeHead(404);
		res.end();
	}
});

server.listen(process.argv[2]);
