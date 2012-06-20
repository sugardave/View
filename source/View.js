enyo.kind({
	name: "com.sugardave.View",
	kind: enyo.FittableRows,
	classes: "view",
	published: {
		headerComponents: [],
		toolbarComponents: []
	},
	create: function() {
		this.inherited(arguments);
		this.$.headerComponents.resized();
		this.$.toolbarComponents.resized();
	},
	initComponents: function() {
		var owner = this.getInstanceOwner();
		this.createComponent({name: "headerComponents", isChrome: true});
		this.$.headerComponents.createComponents(this.headerComponents, {owner: owner});
		
		this.createComponent({name: "client", fit: true, classes: "client"});
		
		this.createComponent({name: "toolbarComponents", isChrome: true});
		this.$.toolbarComponents.createComponents(this.toolbarComponents, {owner: owner});
		
		this.inherited(arguments);
	},
	headerComponentsChanged: function() {
		var owner = this.getInstanceOwner();
		this.$.headerComponents.destroyClientControls();
		this.$.headerComponents.createComponents(this.headerComponents, {owner: owner});
		this.$.headerComponents.resized();
	},
	toolbarComponentsChanged: function() {
		var owner = this.getInstanceOwner();
		this.$.toolbarComponents.destroyClientControls();
		this.$.toolbarComponents.createComponents(this.toolbarComponents, {owner: owner});
		this.$.toolbarComponents.resized();
	}
});