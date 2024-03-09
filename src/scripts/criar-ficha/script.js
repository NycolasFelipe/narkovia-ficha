import changeAncestralidade from "./changeAncestralidade.js";
import changeCategoria from "./changeCategoria.js";
import changeIdade from "./changeIdade.js";
import changeConduta from "./changeConduta.js";
import changeTamanho from "./changeTamanho.js";
import changeAtributo from "./changeAtributo.js";
import slickSlider from "../../scripts/common/slickSlider.js";
import validaPasso from "./validaPasso.js";
import ___debug from "./___debug.js";

$(document).ready(() => {
  changeAncestralidade();
  changeCategoria();
  changeIdade();
  changeConduta();
  changeTamanho();
  changeAtributo();

  slickSlider("#conduta .condutas");
  validaPasso();
  ___debug();
});
