import changeIdade from "./changeIdade.js";

export default function localStorageLoad() {
  const storage = JSON.parse(localStorage.getItem("passo-a-passo"));
  $("#ancestralidade select").val(storage.ancestralidade).change();
  $("#jornada select#jornadas").val(storage.jornada).change();
  $("#jornada select#condutas").val(storage.conduta).change();
  $("#categoria select").val(storage.categoria).change();
  $("#idade input").val(storage.idade);
  changeIdade();
}