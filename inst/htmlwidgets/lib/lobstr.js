var LobstrView = (function () {
    function LobstrView(el, width, height) {
        this.host = el;
    }
    LobstrView.prototype.load = function (data) {
        this.host.innerText = data.type + " " +
            data.desc + " " +
            data.size;
        for (var _i = 0, _a = data.children; _i < _a.length; _i++) {
            var child = _a[_i];
            this.renderChild(this.host, child, 1);
        }
    };
    LobstrView.prototype.renderChild = function (par, obj, lvl) {
        var ele = document.createElement("div");
        ele.className = "child";
        var desc = document.createElement("div");
        // add the name
        var name = document.createElement("span");
        name.className = "var_name";
        desc.appendChild(name);
        name.innerText = obj.name;
        // add the details
        var details = document.createElement("span");
        details.innerText = obj.object.type + " " + obj.object.desc + " " +
            obj.object.size;
        desc.appendChild(details);
        ele.appendChild(desc);
        par.appendChild(ele);
        // render children recursively
        for (var _i = 0, _a = obj.object.children; _i < _a.length; _i++) {
            var child = _a[_i];
            this.renderChild(ele, child, lvl + 1);
        }
    };
    return LobstrView;
})();
