var LobstrView = (function () {
    function LobstrView(el, width, height) {
        this.host = el;
    }
    LobstrView.prototype.load = function (data) {
        var ele = document.createElement("table");
        this.host.appendChild(ele);
        var rootRow = document.createElement("tr");
        var root = document.createElement("td");
        root.innerText = data.type + " " +
            data.desc + " " +
            data.size;
        rootRow.appendChild(root);
        ele.appendChild(rootRow);
        ele.className = "host";
        for (var _i = 0, _a = data.children; _i < _a.length; _i++) {
            var child = _a[_i];
            this.renderChild(ele, child, 1);
        }
    };
    LobstrView.prototype.renderChild = function (par, obj, lvl) {
        var row = document.createElement("tr");
        var name = document.createElement("td");
        // if there's moe than one child, draw the expander
        var expand = document.createElement("div");
        if (obj.object.children !== null &&
            obj.object.children.length > 0) {
            var h = document.createElement("div");
            h.className = "expand-horiz";
            expand.appendChild(h);
            var v = document.createElement("div");
            v.className = "expand-vert";
            expand.appendChild(v);
            expand.className = "expander";
        }
        else {
            expand.className = "leafnode";
        }
        name.appendChild(expand);
        // add the name
        var label = document.createElement("span");
        label.className = "var_name";
        label.innerText = obj.name;
        name.appendChild(label);
        row.appendChild(name);
        // add the details
        var details = document.createElement("td");
        details.innerText = obj.object.type + " " + obj.object.desc;
        row.appendChild(details);
        // add the size
        var size = document.createElement("td");
        size.innerText = obj.object.size;
        row.appendChild(size);
        // add the whole thing to the parent
        par.appendChild(row);
        // hide all but the first level of children initially
        if (lvl <= 1) {
        }
        else {
            expand.className += " expanded";
        }
        // render children recursively
        var childrows = [];
        for (var _i = 0, _a = obj.object.children; _i < _a.length; _i++) {
            var child = _a[_i];
            var childele = this.renderChild(par, child, lvl + 1);
            childrows.push(childele);
            if (lvl > 1) {
                childele.style.display = "none";
            }
        }
        // create show/hide on click handler
        expand.addEventListener("click", function () {
            if (expand.className === "expander expanded") {
                for (var _i = 0; _i < childrows.length; _i++) {
                    var child = childrows[_i];
                    child.style.display = "none";
                }
                expand.className = "expander";
            }
            else {
                for (var _a = 0; _a < childrows.length; _a++) {
                    var child = childrows[_a];
                    child.style.display = "block";
                }
                expand.className = "expander expanded";
            }
        });
        return row;
    };
    return LobstrView;
})();
