import contentJornada from "../content/jornada.js";

export default function changeConduta() {
  let jornada = $("#jornada").val();
  jornada = contentJornada("condutas", jornada);

  let conduta = $("#conduta").val();
  conduta = jornada.find((item) => item.conduta.includes(conduta));
  
  const condutaGanhos = conduta.ganhos;

  $(".conduta-ganho").text(condutaGanhos);
}