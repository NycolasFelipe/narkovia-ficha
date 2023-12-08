import changeAtributoRange from "./changeAtributoRange.js";
import loadAtributos from "../calculadora/loadAtributos.js";
import localStorageLoad from "./localStorageLoad.js";
import localStorageClear from "./localStorageClear.js";
import localStorageSave from "./localStorageSave.js";
import loadGraduacoes from "./loadGraduacoes.js";
import changeGraduacaoRange from "./changeGraduacaoRange.js";
import clearGraduacaoRange from "./clearGraduacaoRange.js";

$(document).ready(() => {
  loadAtributos();
  loadGraduacoes();
  $("#atributos input").on("change", (e) => changeAtributoRange(e));
  $("#graduacoes input").on("change", (e) => changeGraduacaoRange(e));
  $("#graduacoes input").on("click", (e) => clearGraduacaoRange(e));
  localStorageLoad();
});

// Local Storage
$(window).on("unload", () => localStorageSave());
$("#clear").on("click", () => localStorageClear());

