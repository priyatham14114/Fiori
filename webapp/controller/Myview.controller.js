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

            button_Click: () => {
                debugger;
                alert("Data deleted successfully...")

            },
            onClick_Calculate: function (Eve) {
                // debugger;
                // const first = parseInt(this.getValue().byId("id_input1"));
                const first = parseInt(this.getView().byId("id_input1").getValue())

                const second = parseInt(this.getView().byId("id_input2").getValue())

                const Result = first + second

                console.log(Result);

                console.log();
                
                alert(Result);

            },
            myJsonModel: function(){
                // debugger;
               const person = {
                    Student: {
                        name: "Subhash",
                        age: "35"
                    },
                    address: {
                        homeTown: "kakinada",
                        state: "AndhraPradesh",
                        country: "India"
                    }
                }

               const oMyJson = new Jsonmodel(person);
               this.getView().setModel(oMyJson); // last change give another model
               console.log(oMyJson);

            }

        });
    });
