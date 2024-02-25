import changeAncestralidade from "./src/scripts/index/changeAncestralidade.js";
import changeCategoria from "./src/scripts/index/changeCategoria.js";
import changeIdade from "./src/scripts/index/changeIdade.js";
import incrementIdade from "./src/scripts/index/incrementIdade.js";
import localStorageSave from "./src/scripts/index/localStorageSave.js";
import localStorageLoad from "./src/scripts/index/localStorageLoad.js";
import localStorageClear from "./src/scripts/index/localStorageClear.js";
import contentConduta from "./src/content/conduta.js";

//Local Storage
$(document).ready(() => {
  localStorageLoad();
});

$(window).on("unload", () => localStorageSave());
$("#clear").on("click", () => localStorageClear());

//Atualiza ancestralidade
$("#ancestralidade select").on("change", changeAncestralidade);

//Atualiza categoria
$("#categoria select").on("change", changeCategoria);

//Atualiza ciclos de vida
$.each(["mousemove", "touchmove"], (k, v) => $("#idade input").on(v, changeIdade));

//Atualiza valor do slide de idade
$("#idade .idade-menos").on("click", () => {
  incrementIdade(-1);
  changeIdade();
})

$("#idade .idade-mais").on("click", () => {
  incrementIdade(1);
  changeIdade();
})
