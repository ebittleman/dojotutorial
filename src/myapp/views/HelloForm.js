define([
	"dojo/_base/declare",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dojo/Evented",
	"dojo/text!./templates/HelloForm.html"], 
	function(declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Evented, templateString){

	return declare("myapp.views.HelloForm", [_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Evented], {
		
		domNode: null,

		templateString: templateString,

		title: 'My Title',
		_setTitleAttr: {node: 'titleNode', type: 'innerHTML'},

		titleStyle: '',
		_setTitleStyleAttr: {node: 'titleNode', attribute: 'style'},
		
		_submit: function(ev){
			this.emit("submit", {
				value: this.inputNode.value
			});
		},

		// run after placed on screen
		startup: function(){},

		// run when destroyed
		destroyRecursive: function(){},
		destroy: function(){}
	});
});