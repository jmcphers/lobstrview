var LobstrView = (function () {
    function LobstrView(el, width, height) {
        this.host = el;
    }
    LobstrView.prototype.load = function (data) {
        this.host.innerText = data.desc[0];
    };
    return LobstrView;
})();
