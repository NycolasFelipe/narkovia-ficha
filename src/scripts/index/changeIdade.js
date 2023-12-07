import contentIdade from "../../content/idade.js";
import contentVivencia from "../../content/vivencia.js";
import removeDiacritics from "../common/removeDiacritics.js";

export default function changeIdade() {
  $('#idade .idade-value').text($("#idade input").val());
  const valor = parseInt($('#idade input').val());
  const conteudoIdade = contentIdade("content");
  const textExpectativa = removeDiacritics($('#idade .expectativa').text()).toLowerCase().replaceAll("-", "");
  const ancestralidades = Object.keys(conteudoIdade);

  $.each(ancestralidades, (i, e) => {
    if (ancestralidades[i].includes(textExpectativa)) {
      const vivencia = conteudoIdade[ancestralidades[i]].vivencia;
      let vivenciaTipo = "";

      if (valor <= vivencia.infanteMax) {
        vivenciaTipo = "infante";
      } else if (valor >= vivencia.infanteMax + 1 && valor <= vivencia.jovemMax) {
        vivenciaTipo = "jovem";
      } else if (valor >= vivencia.jovemMax + 1 && valor <= vivencia.maduroMax) {
        vivenciaTipo = "maduro";
      } else {
        vivenciaTipo = "senior";
      }

      const vivenciaInformacoes = contentVivencia(vivenciaTipo);
      $("#idade .vivencia").text(vivenciaInformacoes.titulo);
      $("#idade .vivenciaSortilegio").text(vivenciaInformacoes.sortilegio);
      $("#idade .vivenciaComposicao").text(vivenciaInformacoes.composicao);
      $("#idade .vivenciaGraduacao").text(vivenciaInformacoes.graduacao);
      $("#idade .vivenciaViciosMax").text(vivenciaInformacoes.viciosMax);
      $("#idade .vivenciaMaestria").text(vivenciaInformacoes.maestria);

      return false;
    }
  });

  if (valor !== 0) {
    $("#idade .passo strong").addClass("concluido");
  } else {
    $("#idade .passo strong").removeClass("concluido");
  }
}