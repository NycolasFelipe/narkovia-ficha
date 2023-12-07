import contentJornada from "../../content/jornada.js";
import changeConduta from "./changeConduta.js";

export default function changeJornada() {
  const tipo = $("#jornada select#jornadas").val();
  $("#jornada #jornada-ganhos").removeClass("d-none");
  $("#jornada #condutas-label").removeClass("d-none");
  $("#jornada select#condutas").removeClass("d-none");
  $("#jornada #conduta-ganhos").removeClass("d-none");

  if (!tipo.includes("Escolha")) {
    const jornada = contentJornada("condutas", tipo);
    $("#jornada select#condutas").html("");

    $.each(jornada, (i, e) => {
      //Populando condutas da jornada escolhida
      const condutaValue = jornada[i].conduta;
      const condutaTitulo = jornada[i].titulo;
      const condutaOption = `<option value="${condutaValue}">${condutaTitulo}</option>`;
      $("#jornada select#condutas").append(condutaOption);
    })

    //Exibindo ganhos da jornada escolhida
    const jornadaGanhos = contentJornada("jornadas", tipo);
    $("#jornada .jornada-ganho").text(jornadaGanhos);

    //Atualiza passo
    $("#jornada .passo strong").addClass("concluido");
  } else {
    $("#jornada-ganhos").addClass("d-none");
    $("#jornada #condutas-label").addClass("d-none");
    $("#jornada select#condutas").addClass("d-none");
    $("#jornada #conduta-ganhos").addClass("d-none");

    //Atualiza passo
    $("#jornada .passo strong").removeClass("concluido");
  }

  changeConduta();
}