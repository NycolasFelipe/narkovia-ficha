import Ancestralidade from "../content/classes/ancestralidade.js";
import Vivencia from "../content/classes/vivencia.js";
import ContentAncestralidade from "../content/interfaces/ancestralidade.js";
import validaFicha from "./validaFicha.js";

function changeIdadeSlide(ancestralidades: Array<ContentAncestralidade>) {
  const valor = $('#idade input').val()?.toString();
  if (valor !== undefined) {
    const valorInt = parseInt(valor)
    const ancestralidadeEscolhida = $("#ancestralidade option:selected").attr("value");

    if (ancestralidadeEscolhida !== undefined) {
      $.each(ancestralidades, (i, e) => {
        if (ancestralidadeEscolhida.toLowerCase().includes(e.id.toLowerCase())) {
          const vivencia = e.vivencia;
          let vivenciaTipo;

          if (valorInt <= vivencia.infanteMax) {
            vivenciaTipo = "infante";
          } else if (valorInt >= vivencia.infanteMax + 1 && valorInt <= vivencia.jovemMax) {
            vivenciaTipo = "jovem";
          } else if (valorInt >= vivencia.jovemMax + 1 && valorInt <= vivencia.maduroMax) {
            vivenciaTipo = "maduro";
          } else {
            vivenciaTipo = "senior";
          }

          const vivenciaInformacoes = Vivencia.getItemById(vivenciaTipo);
          if (typeof vivenciaInformacoes !== "undefined") {
            $("#idade .vivencia").text(vivenciaInformacoes.titulo);
            $("#idade .vivenciaSortilegio").text(vivenciaInformacoes.sortilegio);
            $("#idade .vivenciaComposicao").text(vivenciaInformacoes.composicao);
            $("#idade .vivenciaGraduacao").text(vivenciaInformacoes.graduacao);
            $("#idade .vivenciaViciosMax").text(vivenciaInformacoes.viciosMax);
            $("#idade .vivenciaMaestria").text(vivenciaInformacoes.maestria);
            $("#idade .vivenciaCondutas").text(vivenciaInformacoes.condutas);

            //Atualiza preview
            if (valorInt !== 0) {
              let previewText = `${valorInt} ciclos (${vivenciaInformacoes.titulo.toLowerCase()})`;
              if (valorInt === 1) previewText = `${valorInt} ciclo (${vivenciaTipo})`;
              $(".preview-vivencia").text(previewText);
            } else {
              $(".preview-vivencia").text("");
            }

            return false;
          }
        }
      });
    }
  }

  // Atualiza preview
  const url = window.location.search.split("=")[1];
  if (url === "idade") {
    $(".preview-vivencia").prev().removeClass("d-none");
  }

  updateIdade();
}

function changeIdadeButton(ancestralidades: Array<ContentAncestralidade>, value: number) {
  incrementIdade(value);
  changeIdadeSlide(ancestralidades);
  updateIdade();
  validaFicha();
}

function incrementIdade(num: number) {
  const valorInput = $("#idade input").val()?.toString();
  if (typeof valorInput !== "undefined") {
    const valorInputInt = parseInt(valorInput);
    $("#idade input").val(valorInputInt + num);
  }
}

function updateIdade() {
  const valorInput = $("#idade input").val()?.toString();
  if (typeof valorInput !== "undefined") {
    $('#idade .idade-value').text(valorInput);
  }
}

function updateExpectativa() {
  $("#ancestralidade select").on("change", () => {
    const option = $("#ancestralidade option:selected").attr("value");
    if (option !== undefined) {
      const ancestralidade = Ancestralidade.getItemById(option);
      if (typeof ancestralidade !== "undefined") {
        const expectativaDeVida = ancestralidade.vivencia.expectativa;
        $("#idade .expectativa-valor").text(expectativaDeVida);
        const expectativaInt = parseInt(expectativaDeVida);
        $("#idade input").attr("max", expectativaInt + 10);
      }
    }
  });
}

function changeIdade() {
  const ancestralidades = Ancestralidade.getItems();

  //Atualiza expectativa de vida quando a ancestralidade muda
  updateExpectativa();

  //Atualiza idade ao mover slide
  changeIdadeSlide(ancestralidades);

  $.each(["mouseup", "touch"], (k, v) => $("#idade input").on(v, () => changeIdadeSlide(ancestralidades)));
  $.each(["mousemove", "touchmove"], (k, v) => $("#idade input").on(v, () => updateIdade()));
  $("#idade input").on("touchend", () => changeIdadeSlide(ancestralidades));
  $("#ancestralidade select").on("change", () => changeIdadeSlide(ancestralidades));
  $("#idade input").focusout(() => validaFicha());
  $("#idade input").focus(() => validaFicha());
  $("#idade input").on("touchend", () => validaFicha());
  $("#idade .idade-mais").on("click", () => changeIdadeButton(ancestralidades, 1));
  $("#idade .idade-menos").on("click", () => changeIdadeButton(ancestralidades, -1));

  //Atualiza preview
  $("#idade .bi-arrow-right-square-fill").one("mouseup", () => {
    $(".preview-conduta").prev().removeClass("d-none");
    $(".preview-conduta-empty").removeClass("d-none");
  });

  changeIdadeSlide(ancestralidades);
}

export default changeIdade;