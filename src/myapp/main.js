define([
	'exports',
	'dojo/parser',
	'dijit/registry',
	'dojo/on',
	'dojo/when',
	'dojo/store/Memory',
	'dojo/store/JsonRest',
	'dojo/store/Cache',
	'dojo/store/Observable',
	'./views/HelloView',
	'./views/HelloForm'
], function (myapp, parser, registry, on, when, Memory, JsonRest, Cache, Observable) {
	myapp.init = function () {
		parser.parse().then(function(){

			var memstore = new Memory();
			var store = new JsonRest({target:'/api/v1/states/'});
			store = Observable(store);

			store = Cache(store, memstore);

			var resultset = store.query();

			var form = registry.byId('form');
			var form2 = registry.byId('form2');
			var list2 = registry.byId('list2');
			list2.set('resultset', resultset);

			on(form, "submit", function(ev){
				store.add(ev);
				when(resultset, function(set){
					console.log(set);
				});
			});

			on(form2, "submit", function(ev){
				form.set('title',ev.value);
			});
		});
	};
});
