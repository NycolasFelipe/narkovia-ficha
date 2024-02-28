import changeAncestralidade from "./changeAncestralidade.js";
import changeCategoria from "./changeCategoria.js";
import changeConduta from "./changeConduta.js";
import changeIdade from "./changeIdade.js";
import changeNome from "./changeNome.js";
import slickSlider from "./slickSlider.js";
import validaPasso from "./validaPasso.js";

$(document).ready(() => {
  changeNome();
  changeAncestralidade();
  changeCategoria();
  changeIdade();
  changeConduta();
  slickSlider("#conduta .condutas");
  validaPasso();
});
