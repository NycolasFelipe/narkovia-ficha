import contentIdade from "../../content/idade.js";
import contentVivencia from "../../content/vivencia.js";
import removeDiacritics from "../common/removeDiacritics.js";

export default function changeIdade() {
  $('.ficha-idade .idade-value').text($("#idade").val());
  const valor = parseInt($('#idade').val());
  const conteudoIdade = contentIdade("content");
  const textExpectativa = removeDiacritics($('.expectativa').text()).toLowerCase().replaceAll("-", "");
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
      $(".vivencia").text(vivenciaInformacoes.titulo);
      $(".vivenciaSortilegio").text(vivenciaInformacoes.sortilegio);
      $(".vivenciaComposicao").text(vivenciaInformacoes.composicao);
      $(".vivenciaGraduacao").text(vivenciaInformacoes.graduacao);
      $(".vivenciaViciosMax").text(vivenciaInformacoes.viciosMax);
      $(".vivenciaMaestria").text(vivenciaInformacoes.maestria);

      return false;
    }
  });

  if (valor !== 0) {
    $(".ficha-idade .ficha-passo strong").addClass("concluido");
  } else {
    $(".ficha-idade .ficha-passo strong").removeClass("concluido");
  }
}