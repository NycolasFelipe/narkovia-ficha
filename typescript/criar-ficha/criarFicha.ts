import slickSlider from "../util/slickSlider.js";
import _debug from "./_debug.js";
import changeAncestralidade from "./changeAncestralidade.js";
import changeAtributo from "./changeAtributo.js";
import changeCategoria from "./changeCategoria.js";
import changeConduta from "./changeConduta.js";
import changeGraduacao from "./changeGraduacao.js";
import changeGraduacaoConduta from "./changeGraduacaoConduta.js";
import changeIdade from "./changeIdade.js";
import changeTamanho from "./changeTamanho.js";
import handleLoading from "./handleLoading.js";
import validaPasso from "./validaFicha.js";

handleLoading();

jQuery(function () {
  changeAncestralidade();
  changeCategoria();
  changeIdade();
  changeConduta();
  changeTamanho();
  changeAtributo();
  changeGraduacaoConduta();
  changeGraduacao();
  validaPasso();
  slickSlider("#conduta .condutas");
  // _debug();
});

//Adiciona propriedade com valor do ultimo scroll p/ prevenir toques acidentais
$(window).on("scroll", () => {
  //@ts-ignore
  window.lastScrollTime = new Date().getTime();
});