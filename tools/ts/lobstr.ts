
interface LobstrObject {
    size: string,
    desc: string,
    type: string,
    children: LobstrChild[]
}

interface LobstrChild {
    name: string[],
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
            renderChild(this.host, child, 1);
        }
    }

    renderChild(par: HTMLElement, obj: LobstrChild, lvl: number): void {
        let ele = document.createElement("div");
        // TODO: render recursively here
    }

    private host: HTMLElement;
}
