export default function clearLocalStorage() {
  //Clear Atributos
  localStorage.removeItem("atributos");
  $(".atributo-range").val(0);
  $(".atributo-range").trigger("change");
}