enyo.kind({
	name: "sugardave.View",
	kind: enyo.FittableRows,
	classes: "view",
	published: {
		headerComponents: [],
		footerComponents: []
	},
	initComponents: function() {
		var owner = this.getInstanceOwner();
		
		this.createChrome([
			{name: "headerComponents", isChrome: true},
			{kind: enyo.FittableRows, name: "client", fit: true, classes: "client", isChrome: true},
			{name: "footerComponents", isChrome: true}
		]);

		this.$.headerComponents.createComponents(this.headerComponents, {owner: owner});
		this.$.headerComponents.resized();
		
		this.$.footerComponents.createComponents(this.footerComponents, {owner: owner});
		this.$.footerComponents.resized();
		
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
		this.$.footerComponents.destroyClientControls();
		this.$.footerComponents.createComponents(this.footerComponents, {owner: owner});
		this.$.footerComponents.resized();
	}
});