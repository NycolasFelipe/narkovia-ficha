import validaFicha from "./validaFicha.js";
function setUrl(passo) {
    const url = new URL(window.location.href);
    url.searchParams.set("passo", passo);
    window.history.pushState({}, '', url.toString());
    $(window).scrollTop(250);
    validaFicha();
}
function _debug() { }
export default _debug;
