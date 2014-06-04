/*jshint unused:false*/
var dojoConfig = {
	async: true,
	baseUrl: '',
	tlmSiblingOfDojo: false,
	isDebug: true,
	packages: [
		'dojo',
		'dijit',
		'dojox',
		'myapp'
	],
	deps: [ 'myapp' ],
	callback: function (myapp) {
		myapp.init();
	}
};
