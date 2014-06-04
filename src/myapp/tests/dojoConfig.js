/*jshint unused:false*/
var dojoConfig = {
	async: true,
	baseUrl: location.pathname.replace(/\/myapp\/.*$/, '/'),
	tlmSiblingOfDojo: false,
	isDebug: true,
	packages: [
		'dojo',
		'dijit',
		'dojox',
		'myapp'
	],
	deps: [ 'myapp/tests/ready' ]
};
