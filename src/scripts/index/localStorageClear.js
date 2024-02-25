import changeIdade from "./changeIdade.js";

export default function localStorageClear() {
  $("#ancestralidade select").prop('selectedIndex',0).change();
  $("#categoria select").prop('selectedIndex',0).change();
  $("#idade input").val(0);
  changeIdade();
}