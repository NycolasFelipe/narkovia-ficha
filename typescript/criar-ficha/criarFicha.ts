import slickSlider from "../util/slickSlider.js";
import changeAncestralidade from "./changeAncestralidade.js";
import changeAtributo from "./changeAtributo.js";
import changeCategoria from "./changeCategoria.js";
import changeConduta from "./changeConduta.js";
import changeIdade from "./changeIdade.js";
import changeTamanho from "./changeTamanho.js";
import handleLoading from "./handleLoading.js";
import validaPasso from "./validaFicha.js";
// import changeAncestralidade from "./changeAncestralidade.js";
// import changeCategoria from "./changeCategoria.js";
// import changeIdade from "./changeIdade.js";
// import changeConduta from "./changeConduta.js";
// import changeTamanho from "./changeTamanho.js";
// import changeAtributo from "./changeAtributo.js";
// import changeGraduacao from "./changeGraduacao.js";
// import slickSlider from "../../scripts/common/slickSlider.js";
// import validaPasso from "./validaPasso.js";
// import handleLoading from "./handleLoading.js";
// import ___debug from "./___debug.js";

handleLoading();

jQuery(function () {
  changeAncestralidade();
  changeCategoria();
  changeIdade();
  changeConduta();
  changeTamanho();
  changeAtributo();
  validaPasso();
  slickSlider("#conduta .condutas");
});
// $(document).ready(() => {
// changeCategoria();
// changeIdade();
// changeConduta();
// changeTamanho();
// changeAtributo();
// changeGraduacao()

// slickSlider("#conduta .condutas");
// validaPasso();
// ___debug();
// });
