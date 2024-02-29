import contentIdade from "../../content/idade.js";
import contentVivencia from "../../content/vivencia.js";
import validaPasso from "./validaPasso.js";

function changeIdadeSlide(conteudoIdade, ancestralidades) {
  $('#idade .idade-value').text($("#idade input").val());
  const valor = parseInt($('#idade input').val());
  const ancestralidadeEscolhida = $("#ancestralidade option:selected").attr("value");
  const idade = parseInt($('#idade input').val()) > 0;

  if (ancestralidadeEscolhida !== undefined) {
    $.each(ancestralidades, (i, e) => {
      if (ancestralidadeEscolhida.toLowerCase().includes(ancestralidades[i])) {
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
        $("#idade .vivenciaCondutas").text(vivenciaInformacoes.condutas);

        return false;
      }
    });
  }

  //Checagem para acessibilidade
  if (idade) $("#idade .bi-arrow-right-square-fill").addClass("avancar-passo-ok");
  else $("#idade .bi-arrow-right-square-fill").removeClass("avancar-passo-ok");
}

function changeIdadeButton(conteudoIdade, ancestralidades, value) {
  incrementIdade(value);
  changeIdadeSlide(conteudoIdade, ancestralidades);
  validaPasso();
}

function incrementIdade(num) {
  $("#idade input").val(parseInt($("#idade input").val()) + num);
}

function updateExpectativa() {
  $("#ancestralidade select").on("change", () => {
    const option = $("#ancestralidade option:selected").attr("value");
    if (option !== undefined) {
      const expectativaDeVida = contentIdade(option).expectativa;
      $("#idade .expectativa-valor").text(expectativaDeVida);
    }
  });
}

export default function changeIdade() {
  const conteudoIdade = contentIdade("content");
  const ancestralidades = Object.keys(conteudoIdade);

  //Atualiza expectativa de vida quando a ancestralidade muda
  updateExpectativa();

  //Atualiza idade ao mover slide
  changeIdadeSlide(conteudoIdade, ancestralidades);

  $.each(["mousemove", "touchmove"], (k, v) => $("#idade input").on(v, () => changeIdadeSlide(conteudoIdade, ancestralidades)));
  $("#ancestralidade select").on("change", () => changeIdadeSlide(conteudoIdade, ancestralidades));
  $("#idade .idade-mais").on("click", () => changeIdadeButton(conteudoIdade, ancestralidades, 1));
  $("#idade .idade-menos").on("click", () => changeIdadeButton(conteudoIdade, ancestralidades, -1));

  changeIdadeSlide();
}