enyo.kind({
	name: "View",
	kind: "com.sugardave.View"
});

enyo.kind({
	name: "App",
	kind: "View",
	headerComponents: [
		{kind: "onyx.Toolbar", components: [
			{content: "Main View header"}
		]}
	],
	components: [
		{content: "This View has a header, a client area that is fit:true (inside a FittableRows), and a footer."},
		{name: "panels", kind: enyo.Panels, fit: true, defaultKind: "View", components: [
			{name: "view1", style: "background-color: rgba(255, 0, 0, 0.5);", headerComponents: [
				{kind: "onyx.Toolbar", content: "View view1 header"}
			], components: [
				{content: "This view contains just a header and the client area"}
			]},
			{name: "view2", style: "background-color: rgba(255, 255, 0, 0.5);", components: [
				{content: "This view contains just the client area and a footer"}
			], footerComponents: [
				{kind: "onyx.Toolbar", content: "View view2 footer"}
			]},
			{name: "view3", style: "background-color: rgba(0, 255, 0, 0.5);", components: [
				{content: "This view has no header or footer"}
			]}
		]}
	],
	footerComponents: [
		{kind: "onyx.Toolbar", layoutKind: enyo.FittableColumnsLayout, components: [
			{content: "Main View footer"},
			{kind: enyo.FittableColumns, fit: true, classes: "enyo-center", components: [
				{name: "previous", kind: "onyx.Button", content: "<<", ontap: "go"},
				{fit: true},
				{name: "next", kind: "onyx.Button", content: ">>", ontap: "go"}
			]}
		]}
	],
	create: function() {
		this.inherited(arguments);
		this.resized();
	},
	go: function(inSender, inEvent) {
		this.$.panels[inSender.name]();
	}
});