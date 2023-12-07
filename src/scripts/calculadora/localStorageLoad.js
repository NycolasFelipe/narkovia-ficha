export default function localStorageLoad() {
  //Load Atributos
  const atributos = JSON.parse(localStorage.getItem("atributos"));
  $.each(atributos, (key, value) => $(`#${key}`).val(value));
  $("#atributos input").change();
}