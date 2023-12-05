import changeAtributoRange from "./changeAtributoRange.js";
import loadAtributos from "./loadAtributos.js";

$(document).ready(() => {
  loadAtributos();
  $(".atributo-range").on("change", (e) => changeAtributoRange(e));
});
