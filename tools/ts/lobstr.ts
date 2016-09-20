
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
        let ele = document.createElement("div");
        this.host.appendChild(ele);

        ele.innerText = data.type + " " + 
                        data.desc + " " + 
                        data.size;
        ele.className = "host";
        for (let child of data.children) {
            this.renderChild(ele, child, 1);
        }
    }

    renderChild(par: HTMLElement, obj: LobstrChild, lvl: number): void {
        let ele = document.createElement("div");
        ele.className = "child";
        let desc = document.createElement("div");

        // add the name
        let name = document.createElement("span");
        name.className = "var_name";
        desc.appendChild(name);
        name.innerText = obj.name;

        // add the details
        let details = document.createElement("span");
        details.innerText = obj.object.type + " " + obj.object.desc + " (" + 
            obj.object.size + ")";
        desc.appendChild(details);

        ele.appendChild(desc);
        par.appendChild(ele);

        // create show/hide on click
        let children = document.createElement("div");
        ele.appendChild(children);
        desc.addEventListener("click", () => {
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
        for (let child of obj.object.children) {
            this.renderChild(children, child, lvl + 1);
        }
    }

    private host: HTMLElement;
}
