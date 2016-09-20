var LobstrView = (function () {
    function LobstrView(el, width, height) {
        this.host = el;
    }
    LobstrView.prototype.load = function (data) {
        var ele = document.createElement("div");
        this.host.appendChild(ele);
        ele.innerText = data.type + " " +
            data.desc + " " +
            data.size;
        ele.className = "host";
        for (var _i = 0, _a = data.children; _i < _a.length; _i++) {
            var child = _a[_i];
            this.renderChild(ele, child, 1);
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
        details.innerText = obj.object.type + " " + obj.object.desc + " (" +
            obj.object.size + ")";
        desc.appendChild(details);
        ele.appendChild(desc);
        par.appendChild(ele);
        // create show/hide on click
        var children = document.createElement("div");
        ele.appendChild(children);
        desc.addEventListener("click", function () {
            if (children.style.display === "block")
                children.style.display = "none";
            else
                children.style.display = "block";
        });
        // hide all but the first level of children initially
        if (lvl > 1) {
            children.style.display = "none";
        }
        // render children recursively
        for (var _i = 0, _a = obj.object.children; _i < _a.length; _i++) {
            var child = _a[_i];
            this.renderChild(children, child, lvl + 1);
        }
    };
    return LobstrView;
})();
