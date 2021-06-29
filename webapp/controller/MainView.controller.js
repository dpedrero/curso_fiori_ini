sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict"; //Para comprobar los errores de javascript

		return Controller.extend("logaligroup.invoices.controller.MainView", {
			onInit: function () {
                const oJSONModel = new sap.ui.model.json.JSONModel();
                const oView = this.getView();
                oJSONModel.loadData("./model/SelectionScreenMenu.json");
                oView.setModel(oJSONModel, "selectionScreen");
                //this.getView().setModel(oJSONModel, "selectionScreen");
			}
		});
	});
