
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
        this.host.innerText = data.type + " " + 
                              data.desc + " " + 
                              data.size;
        for (let child of data.children) {
            this.renderChild(this.host, child, 1);
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
        details.innerText = obj.object.type + " " + obj.object.desc + " " + 
            obj.object.size;
        desc.appendChild(details);

        ele.appendChild(desc);
        par.appendChild(ele);

        // render children recursively
        for (let child of obj.object.children) {
            this.renderChild(ele, child, lvl + 1);
        }
    }

    private host: HTMLElement;
}
