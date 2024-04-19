/*global QUnit*/

sap.ui.define([
	"app_ui5/controller/Myview.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Myview Controller");

	QUnit.test("I should test the Myview controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
