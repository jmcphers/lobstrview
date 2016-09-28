
interface LobstrObject {
    size: string,
    desc: string,
    type: string,
    children: LobstrChild[]
}

interface LobstrChild {
    name: string,
    object: LobstrObject
}

class LobstrView {

    constructor(el: HTMLElement, width: number, height: number) {
        this.host = el;
    }

    load(data: LobstrObject): void {
        let ele = document.createElement("table");
        this.host.appendChild(ele);

        let rootRow = document.createElement("tr");
        let root: HTMLTableDataCellElement = document.createElement("td");

        root.innerText = data.type + " " + 
                        data.desc + " " + 
                        data.size;
        rootRow.appendChild(root);
        ele.appendChild(rootRow);

        ele.className = "host";
        for (let child of data.children) {
            this.renderChild(ele, child, 1);
        }
    }

    renderChild(par: HTMLElement, obj: LobstrChild, lvl: number): HTMLElement {
        let row: HTMLTableRowElement = document.createElement("tr");
        let name: HTMLTableDataCellElement = document.createElement("td");

        // if there's moe than one child, draw the expander
        let expand = document.createElement("div");
        if (obj.object.children !== null &&
            obj.object.children.length > 0) {
            let h = document.createElement("div");
            h.className = "expand-horiz";
            expand.appendChild(h);
            let v = document.createElement("div");
            v.className = "expand-vert";
            expand.appendChild(v);
            expand.className = "expander";
        } else {
            expand.className = "leafnode";
        }
        name.appendChild(expand);

        // add the name
        let label = document.createElement("span");
        label.className = "var_name";
        label.innerText = obj.name;
        name.appendChild(label);
        row.appendChild(name);

        // add the details
        let details = document.createElement("td");
        details.innerText = obj.object.type + " " + obj.object.desc;
        row.appendChild(details);

        // add the size
        let size = document.createElement("td");
        size.innerText = obj.object.size;
        row.appendChild(size);

        // add the whole thing to the parent
        par.appendChild(row);

        // hide all but the first level of children initially
        if (lvl <= 1) {
        } else {
            expand.className += " expanded";
        }

        // render children recursively
        let childrows: Array<HTMLElement> = [];
        for (let child of obj.object.children) {
            let childele = this.renderChild(par, child, lvl + 1);
            childrows.push(childele);
            if (lvl > 1) {
                childele.style.display = "none";
            }
        }

        // create show/hide on click handler
        expand.addEventListener("click", () => {
            if (expand.className === "expander expanded") {
                for (let child of childrows) {
                    child.style.display = "none";
                }
                expand.className = "expander";
            } else {
                for (let child of childrows) {
                    child.style.display = "block";
                }
                expand.className = "expander expanded";
            }
        });

        return row;
    }

    private host: HTMLElement;
}
