var requirejs = require("requirejs")
requirejs.optimize({
	baseUrl: '.',
	name: "output",
	out: "main.js"
	//exclude: "avalon"
}, function(res) {
	console.log(res) // �ɹ�
}, function(err) {
	console.log(err) // ����
})