var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(dir, function (err, list) {
	if (err) throw err;
	for (i = 0, l = list.length; i < l; i++) {
		if (path.extname(list[i]) == ext) {
			console.log(list[i]);
		}
	}
})
