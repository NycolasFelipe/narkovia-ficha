import removeDiacritics from "../common/removeDiacritics.js";

export default function saveLocalStorage() {
  //Save Atributos
  const atributos = ["Aura", "Captação", "Celeridade", "Eteressência", "Idoneidade", "Sapiência", "Tenacidade", "Pujança"];
  const atributosLocalStorage = {};

  $.each(atributos, (i, e) => {
    const atributoTratado = `range${removeDiacritics(atributos[i])}`;
    atributosLocalStorage[atributoTratado] = parseFloat($(`#${atributoTratado}`).val());
  })

  localStorage.setItem("atributos", JSON.stringify(atributosLocalStorage));
}