import changeAtributoRange from "./changeAtributoRange.js";
import loadAtributos from "../calculadora/loadAtributos.js";
import loadLocalStorage from "../localStorage/loadLocalStorage.js";
import clearLocalStorage from "../localStorage/clearLocalStorage.js";
import saveLocalStorage from "../localStorage/saveLocalStorage.js";

$(document).ready(() => {
  loadAtributos();
  $(".atributo-range").on("change", (e) => changeAtributoRange(e));
  loadLocalStorage();
});

$(window).on("unload", () => saveLocalStorage());
$("#limpar-atributos").on("click", () => clearLocalStorage());
