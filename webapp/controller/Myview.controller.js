sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Jsonmodel) {
        "use strict";
        
        return Controller.extend("appui5.controller.Myview", {

            onInit: function(eve){
                    // debugger;
            //    const person = {
            //         Student: {
            //             name: "Subhash",
            //             age: "35"
            //         },
            //         address: {
            //             homeTown: "kakinada",
            //             state: "AndhraPradesh",
            //             country: "India"
            //         },
            //     }
            //    const person2 = {
            //         Student: {
            //             name: "priyatham",
            //             age: "30"
            //         },
            //         address: {
            //             homeTown: "kkd",
            //             state: "AP",
            //             country: "Ind"
            //         },
            //     }
            //    const oMyJson = new Jsonmodel(person);
            //    const oMyJson2 = new Jsonmodel(person2)
            //    this.getView().setModel(oMyJson);    // last change give another model
            //    this.getView().setModel(oMyJson2,"secondModel");   
            //    console.log(oMyJson);
            //    console.log(oMyJson2);


            }

        });
    });
