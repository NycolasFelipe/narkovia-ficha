export default function loadLocalStorage() {
  //Load Atributos
  const atributos = JSON.parse(localStorage.getItem("atributos"));
  $.each(atributos, (key, value) => $(`#${key}`).val(value));
$(".atributo-range").trigger("change");
}