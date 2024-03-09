import changeAncestralidade from "./changeAncestralidade.js";
import changeCategoria from "./changeCategoria.js";
import changeConduta from "./changeConduta.js";
import changeIdade from "./changeIdade.js";
import slickSlider from "../../scripts/common/slickSlider.js";
import validaPasso from "./validaPasso.js";
import ___debug from "./___debug.js";

$(document).ready(() => {
  ___debug();
  changeAncestralidade();
  changeCategoria();
  changeIdade();
  changeConduta();
  slickSlider("#conduta .condutas");
  validaPasso();
});
