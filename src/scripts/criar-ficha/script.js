import changeAncestralidade from "./changeAncestralidade.js";
import changeCategoria from "./changeCategoria.js";
import changeNome from "./changeNome.js";
import validaPasso from "./validaPasso.js";

$(document).ready(() => {
  changeNome();
  changeAncestralidade();
  changeCategoria();
  validaPasso();
});
