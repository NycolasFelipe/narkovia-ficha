import contentJornada from "../../content/jornada.js";
import removeDiacritics from "../common/removeDiacritics.js";
import changeConduta from "./changeConduta.js";

export default function changeJornada() {
  const tipo = $("#jornada select#jornadas").val();
  $("#jornada #jornada-ganhos").removeClass("d-none");
  $("#jornada #condutas-label").removeClass("d-none");
  $("#jornada select#condutas").removeClass("d-none");

  if (!tipo.includes("Escolha")) {
    const jornada = contentJornada("condutas", tipo);
    $("#jornada select#condutas").html(`
      <option selected>Escolha sua conduta</option>
    `);

    //Filtrando condutas bloqueadas pela ancestralidade
    let condutasBloqueadas = $("#ancestralidade .condutas-bloqueadas").text();
    condutasBloqueadas = condutasBloqueadas.split(", ");

    $.each(condutasBloqueadas, (i, e) => {
      condutasBloqueadas[i] = removeDiacritics(e).toLowerCase().replaceAll("'", "");
    });

    $.each(jornada, (i, e) => {
      //Populando condutas da jornada escolhida
      const condutaValue = jornada[i].conduta;
      const condutaTitulo = jornada[i].titulo;
      let condutaOption = "";
      let condutaBloqueada = false;

      $.each(condutasBloqueadas, (i, e) => {
        if (e === condutaValue) {
          condutaBloqueada = true;
          return false;
        }
      });

      if (condutaBloqueada) {
        condutaOption = `<option disabled value="${condutaValue}">${condutaTitulo}</option>`;
      } else {
        condutaOption = `<option value="${condutaValue}">${condutaTitulo}</option>`;
      }
      $("#jornada select#condutas").append(condutaOption);
    });

    //Exibindo ganhos da jornada escolhida
    const jornadaGanhos = contentJornada("jornadas", tipo);
    $("#jornada .jornada-ganho").text(jornadaGanhos);

    //Atualiza passo
    $("#jornada .passo strong").addClass("concluido");
  } else {
    $("#jornada-ganhos").addClass("d-none");
    $("#jornada #condutas-label").addClass("d-none");
    $("#jornada select#condutas").addClass("d-none");
    $("#jornada select#condutas").prop('selectedIndex', 0);

    //Atualiza passo
    $("#jornada .passo strong").removeClass("concluido");
  }

  changeConduta();
}