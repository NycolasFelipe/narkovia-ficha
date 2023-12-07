import removeDiacritics from "../common/removeDiacritics.js";

export default function localStorageSave() {
  //Save Atributos
  const atributos = ["Aura", "Captação", "Celeridade", "Eteressência", "Idoneidade", "Sapiência", "Tenacidade", "Pujança"];
  const atributosLocalStorage = {};

  $.each(atributos, (i, e) => {
    const atributoTratado = `range${removeDiacritics(atributos[i])}`;
    atributosLocalStorage[atributoTratado] = parseInt($(`#${atributoTratado}`).val());
  })

  localStorage.setItem("atributos", JSON.stringify(atributosLocalStorage));
}