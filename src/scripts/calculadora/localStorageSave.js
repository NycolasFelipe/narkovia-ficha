import contentAtributos from "../../content/atributos.js";
import contentGraduacoes from "../../content/graduacoes.js";
import removeDiacritics from "../common/removeDiacritics.js";

export default function localStorageSave() {
  //Save Atributos
  const atributos = contentAtributos();
  const atributosLocalStorage = {};

  $.each(atributos, (i, e) => {
    const atributoTratado = `range${removeDiacritics(atributos[i])}`;
    atributosLocalStorage[atributoTratado] = parseInt($(`#${atributoTratado}`).val());
  })

  localStorage.setItem("atributos", JSON.stringify(atributosLocalStorage));

  //Save Graduacoes
  const graduacoes = contentGraduacoes();
  const graduacoesLocalStorage = {};

  let graduacoesTratadas = [];
  $.each(graduacoes, (i, e) => {
    const itens = graduacoes[i].itens;
    $.each(itens, (j, f) => {
      const item = removeDiacritics(f);
      graduacoesTratadas.push(item);
    });
  })

  $.each(graduacoesTratadas, (i, e) => {
    let key = `range${graduacoesTratadas[i]}`;
    let valueRange = $(`#graduacoes #range${e}`).val();
    let valueSubtotal = $(`#graduacoes #range${e}`).parent().find(".titulo > span").text();
    valueRange = parseInt(valueRange);
    valueSubtotal = parseInt(valueSubtotal);

    graduacoesLocalStorage[key] = {};
    graduacoesLocalStorage[key]["valueRange"] = valueRange;
    graduacoesLocalStorage[key]["valueSubtotal"] = valueSubtotal;
  })

  localStorage.setItem("graduacoes", JSON.stringify(graduacoesLocalStorage));
}