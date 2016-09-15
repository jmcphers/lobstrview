/// <reference path="lobstr.ts"/>
// declare widget binding
HTMLWidgets.widget({
    name: "lobstrview",
    type: "output",
    initialize: function (el, width, height) {
        var view = new LobstrView(el, width, height);
        return {
            lobview: view
        };
    },
    renderValue: function (el, x, inst) {
        inst.lobview.load(x);
    },
    resize: function (el, width, height, inst) {
    }
});
