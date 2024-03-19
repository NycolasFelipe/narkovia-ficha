import validaFicha from "./validaFicha.js";

function setUrl(passo: string) {
  const url = new URL(window.location.href);
  url.searchParams.set("passo", passo);
  window.history.pushState({}, '', url.toString());
  $(window).scrollTop(250);
  validaFicha();
}

// function _debug() {
//   // Ancestralidade
//   $("#ancestralidade select option:eq(1)").prop("selected", "selected");
//   setTimeout(() => {
//     $("#ancestralidade select").trigger("change");
//     $("#ancestralidade .avancar-passo i:last").trigger("click");
//   }, 50);

//   // Categoria
//   setTimeout(() => {
//     $("#categoria select option:eq(1)").prop("selected", "selected");
//     $("#categoria select").trigger("change");
//   }, 100);
//   setTimeout(() => {
//     $("#categoria .avancar-passo i:last").trigger("click");
//   }, 150);

//   // Vivência
//   setTimeout(() => {
//     for (let i = 0; i < 10; i++) {
//       $("#idade input").attr("value", 90);
//     }
//     $("#idade input").trigger("touch");
//     $("#idade input").trigger("focusout");
//   }, 200);

//   setTimeout(() => {
//     $("#idade .avancar-passo i:last").trigger("click");
//   }, 250);

//   // Conduta
//   setTimeout(() => {
//     $("#conduta #condutaOficio").trigger("mouseup");
//     const condutas = $("#conduta .condutas-descricao .conduta-descricao").get();
//     for (let i = 7; i < 9; i++) {
//       $(condutas[i]).find(".conduta-check").trigger("click");
//     }
//     $("#conduta .avancar-passo i:last").trigger("click");
//   }, 200);

//   // Tamanho
//   setTimeout(() => {
//     setUrl("tamanho");
//     $("#tamanho select option:eq(1)").prop("selected", "selected");
//     $("#tamanho select").trigger("change");
//     $("#tamanho .avancar-passo i:last").trigger("mouseup");
//     $("#tamanho .avancar-passo i:last").trigger("click");
//   }, 250);

//   // Atributo
//   setTimeout(() => {
//     $("#atributo .aura .bi-square:nth-child(3)").trigger("click");
//     $("#atributo .captacao .bi-square:nth-child(3)").trigger("click");
//   }, 300);

//   setTimeout(() => {
//     $("#atributo .avancar-passo i:last").trigger("mouseup");
//     $("#atributo .avancar-passo i:last").trigger("click");
//   }, 350);
// }

function _debug() {}

export default _debug;