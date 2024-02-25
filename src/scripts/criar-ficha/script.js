import changeAncestralidade from "../index/changeAncestralidade.js";
import changeNome from "./changeNome.js";
import validaPasso from "./validaPasso.js";

$(document).ready(() => {
  validaPasso();
  changeNome();
  changeAncestralidade();
});

