import contentJornada from "../../content/jornada.js";
import changeConduta from "./changeConduta.js";

export default function changeJornada() {
  const tipo = $("#jornada").val();
  $("#jornada-ganhos").removeClass("d-none");
  $("#conduta").removeClass("d-none");
  $("#conduta-label").removeClass("d-none");
  $("#conduta-ganhos").removeClass("d-none");

  if (!tipo.includes("Escolha")) {
    const jornada = contentJornada("condutas", tipo);
    $("#conduta").html("");

    $.each(jornada, (i, e) => {
      //Populando condutas da jornada escolhida
      const condutaValue = jornada[i].conduta;
      const condutaTitulo = jornada[i].titulo;
      const condutaOption = `<option value="${condutaValue}">${condutaTitulo}</option>`;
      $("#conduta").append(condutaOption);
    })

    //Exibindo ganhos da jornada escolhida
    const jornadaGanhos = contentJornada("jornadas", tipo);
    $(".jornada-ganho").text(jornadaGanhos);

    //Atualiza passo
    $(".ficha-jornada .ficha-passo strong").addClass("concluido");
  } else {
    $("#jornada-ganhos").addClass("d-none");
    $("#conduta").addClass("d-none");
    $("#conduta-label").addClass("d-none");
    $("#conduta-ganhos").addClass("d-none");

    //Atualiza passo
    $(".ficha-jornada .ficha-passo strong").removeClass("concluido");
  }

  changeConduta();
}