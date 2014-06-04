define([
	"dojo/_base/declare",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dojo/Evented",
	"dojo/_base/lang",
	"dojo/dom-construct",
	"dojo/text!./templates/HelloView.html"], 
	function(declare, _WidgetBase, _TemplatedMixin, Evented, lang, domConstruct, templateString){

	return declare("myapp.views.HelloView", [_WidgetBase, _TemplatedMixin, Evented], {
		
		domNode: null,
		resultHandle: null,

		childNodes : [],

		templateString: templateString,

		resultset: null,

		_setResultsetAttr: function(resultset){
			
			if (this.resultHandle) {
				this.resultHandle.remove();
				this.resultHandle = null;
			}

			this.resultHandle = resultset.observe(lang.hitch(this, "_resultUpdated"), true);

			resultset.forEach(lang.hitch(this, "insertItem"));
		},

		_resultUpdated: function(item, removeIndex, insertIndex){
			console.log(arguments);
			if (insertIndex > -1) {
				this.insertItem(item,insertIndex );
			}

			if (removeIndex > -1) {
				this.removeItem(item,removeIndex );
			}
		},

		insertItem: function(item, index){
			var child = domConstruct.create("div",{innerHTML: item.value});
			this.childNodes.splice(index, 0, this.containerNode.insertBefore(child, this.childNodes[index] || null));
		},

		removeItem: function(item, index){
			domConstruct.destroy(this.childNodes.splice(index, 1)[0]);
		}
		
	});
});