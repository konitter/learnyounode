var http = require('http');
var bl = require('bl'); // npm install bl

var urls = process.argv.slice(2, process.argv.length);
var datas = [];
var count = 0;

urls.forEach(function (item, index) {
	http.get(item, function (res) {
		res.pipe(bl(function (err, data) {
			if (err) return console.error(err);
			datas[index] = data.toString();
			count++;
			if (count === urls.length) {
				console.log(datas.join('\n'));
			};
		}));
	});
});
