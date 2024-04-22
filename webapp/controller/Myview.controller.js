sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Jsonmodel) {
        "use strict";

        return Controller.extend("appui5.controller.Myview", {

            onInit: function (eve) {

            },
            onSubmitData: function (eve) {
                debugger
                const Actors = this.getView().getModel().setProperty("/Actors/1")
                console.log(Actors);
            }

        });
    });
