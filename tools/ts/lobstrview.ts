/// <reference path="lobstr.ts"/>

// forward declare external type
declare var HTMLWidgets: any;

// local types
interface Instance {
    lobview: LobstrView
}

// declare widget binding
HTMLWidgets.widget({

  name: "lobstrview",

  type: "output",

  initialize: function(el: HTMLElement, width: number, 
                       height: number): Instance {
    var view = new LobstrView(el, width, height);
    return {
      lobview: view
    };
  },
  
  renderValue: function(el: HTMLElement, x: LobstrObject, inst: Instance) {
      inst.lobview.load(x);
  },
  
  resize: function(el: HTMLElement, width: number, height: number, 
                   inst: Instance) {
      
  }
});

