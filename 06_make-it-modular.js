var filter = require('./06_module');

var dir = process.argv[2];
var ext = process.argv[3];

filter(dir, ext, function (err, list) {
	if (err) throw err;
	list.forEach(function (file) {
		console.log(file);
	});
});
