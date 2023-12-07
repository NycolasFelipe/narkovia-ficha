import changeAtributoRange from "./changeAtributoRange.js";
import loadAtributos from "../calculadora/loadAtributos.js";
import localStorageLoad from "./localStorageLoad.js";
import localStorageClear from "./localStorageClear.js";
import localStorageSave from "./localStorageSave.js";
import loadGraduacoes from "./loadGraduacoes.js";


$(document).ready(() => {
  loadAtributos();
  loadGraduacoes();
  $("#atributos input").on("change", (e) => changeAtributoRange(e));
  localStorageLoad();
});

// Local Storage
$(window).on("unload", () => localStorageSave());
$("#clear").on("click", () => localStorageClear());

