
var projects = require("./../controllers/projects.js");

module.exports = function(app){
	app.get("/index", function(req, res){
		projects.index(req, res);
	});
}