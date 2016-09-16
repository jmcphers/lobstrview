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
        var desc = document.createElement("div");
        desc.innerText = obj.name + ": " + obj.object.type + " " +
            obj.object.desc + " " + obj.object.size;
        desc.style.marginLeft = (lvl * 5) + "px";
        ele.appendChild(desc);
        par.appendChild(ele);
        for (var _i = 0, _a = obj.object.children; _i < _a.length; _i++) {
            var child = _a[_i];
            this.renderChild(ele, child, lvl + 1);
        }
    };
    return LobstrView;
})();
