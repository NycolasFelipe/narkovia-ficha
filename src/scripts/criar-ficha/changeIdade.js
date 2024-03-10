import contentAncestralidade from "../../content/ancestralidade.js";
import contentVivencia from "../../content/vivencia.js";
import validaPasso from "./validaPasso.js";

function changeIdadeSlide(ancestralidades) {
  $('#idade .idade-value').text($("#idade input").val());
  const valor = parseInt($('#idade input').val());
  const ancestralidadeEscolhida = $("#ancestralidade option:selected").attr("value");

  //Atualiza preview
  const url = window.location.search.split("=")[1];
  if (url === "idade") {
    $(".preview-vivencia").prev().removeClass("d-none");
  }

  if (ancestralidadeEscolhida !== undefined) {
    $.each(ancestralidades, (i, e) => {
      if (ancestralidadeEscolhida.toLowerCase().includes(e.id.toLowerCase())) {
        const vivencia = e.vivencia;
        let vivenciaTipo;

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
        $("#idade .vivenciaCondutas").text(vivenciaInformacoes.condutas);

        if (valor !== 0) {
          let previewText = `${valor} ciclos (${vivenciaInformacoes.titulo.toLowerCase()})`;
          if (valor === 1) previewText = `${valor} ciclo (${vivenciaTipo})`;
          $(".preview-vivencia").text(previewText);
        } else {
          $(".preview-vivencia").text("");
        }

        return false;
      }
    });
  }
}

function changeIdadeButton(ancestralidades, value) {
  incrementIdade(value);
  changeIdadeSlide(ancestralidades);
  validaPasso();
}

function incrementIdade(num) {
  $("#idade input").val(parseInt($("#idade input").val()) + num);
}

function updateExpectativa() {
  $("#ancestralidade select").on("change", () => {
    const option = $("#ancestralidade option:selected").attr("value");
    if (option !== undefined) {
      const ancestralidade = contentAncestralidade(option);
      const expectativaDeVida = ancestralidade.vivencia.expectativa;
      $("#idade .expectativa-valor").text(expectativaDeVida);

      const expectativaInt = parseInt(expectativaDeVida);
      $("#idade input").attr("max", expectativaInt + 10);
    }
  });
}

function changeIdade() {
  const ancestralidades = contentAncestralidade();

  //Atualiza expectativa de vida quando a ancestralidade muda
  updateExpectativa();

  // //Atualiza idade ao mover slide
  changeIdadeSlide(ancestralidades);

  $.each(["mousemove", "touchmove"], (k, v) => $("#idade input").on(v, () => changeIdadeSlide(ancestralidades)));
  $("#idade input").on("touchend", () => changeIdadeSlide(ancestralidades));
  $("#ancestralidade select").on("change", () => changeIdadeSlide(ancestralidades));
  $("#idade input").focusout(() => validaPasso());
  $("#idade input").focus(() => validaPasso());
  $("#idade input").on("touchend", () => validaPasso());
  $("#idade .idade-mais").on("click", () => changeIdadeButton(ancestralidades, 1));
  $("#idade .idade-menos").on("click", () => changeIdadeButton(ancestralidades, -1));

  changeIdadeSlide();
}

export default changeIdade;