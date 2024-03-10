import contentAtributo from "../../content/atributo.js";
import validaPasso from "./validaPasso.js";

function loadPontos(atributos) {
  $.each(atributos, (index, atributo) => {
    $("#atributo .atributos").append(`
      <div class="${atributo.id} atributo mt-4">
        <div class="atributo-titulo text-white text-center">
          <p>${atributo.titulo}</p>
          <p class="atributo-gastos">0</p>
        </div>
        <div class="atributo-pontos text-center">
          <i class="${atributo.id}-1 bi bi-slash-square-fill"></i>
          <i class="${atributo.id}-2 bi bi-square"></i>
          <i class="${atributo.id}-3 bi bi-square"></i>
          <i class="${atributo.id}-4 bi bi-square"></i>
          <i class="${atributo.id}-5 bi bi-square"></i>
        </div>
      </div>
    `);
  });
}

function resetPontos() {
  const atributos = $("#atributo .atributo-pontos i:not(.bi-slash-square-fill)");
  $.each(atributos, (index, atributo) => {
    $(atributo).removeClass("bi-square-fill");
    $(atributo).addClass("bi-square");
    $(".atributo-titulo").addClass("atributo-titulo-nulo");
    $(".atributo-gastos").addClass("atributo-gasto-nulo");
    $(".atributo-gastos").text("0");
  });
  $("#tamanho .bi-arrow-right-square-fill").one("mouseup", () => {
    const pontos = $("#atributo .pontos-composicao .pontos-disponiveis").text();
    $("#atributo .pontos-composicao .pontos-restantes").text(pontos);
  });
}

function handlePontos() {
  const selector = $("#atributo .atributo-pontos i:not(.bi-slash-square-fill)");
  $.each(["click", "touch"], (k, v) => $(selector).on(v, (e) => {
    $(e.currentTarget).toggleClass("bi-square");
    $(e.currentTarget).toggleClass("bi-square-fill");

    const prevAll = $(e.currentTarget).prevAll();
    $.each(prevAll, (i, prev) => {
      const element = $(prev).not(".bi-slash-square-fill");
      $(element).addClass("bi-square-fill");
      $(element).removeClass("bi-square");
    });

    const nextAll = $(e.currentTarget).nextAll();
    $.each(nextAll, (i, next) => {
      const element = $(next);
      $(element).removeClass("bi-square-fill");
      $(element).addClass("bi-square");
    });

    const pontos = $(e.currentTarget).parent().find(".bi-square-fill").length + 1;
    const pontosCalculados = 2 ** pontos - 2;
    const pontosGastos = $(e.currentTarget).parents(".atributo").find(".atributo-gastos");
    $(pontosGastos).text(pontosCalculados);

    updatePontosRestantes();
    checkPontos();
  }));
}

function checkPontos() {
  const pontosRestantes = parseInt($("#atributo .pontos-restantes").text());
  if (pontosRestantes < 0) {
    $("#atributo .pontos-composicao span").addClass("text-danger");
    $("#atributo .pontos-alerta").css("display", "block");
    $("#atributo .pontos-ok").css("display", "none");
    $("#atributo .pontos-composicao").removeClass("pontos-composicao-mb");
    $("#atributo").data("valid", false);
  } else if (pontosRestantes === 0) {
    $("#atributo .pontos-composicao span").removeClass("text-danger");
    $("#atributo .pontos-alerta").css("display", "none");
    $("#atributo .pontos-ok").css("display", "block");
    $("#atributo .pontos-composicao").removeClass("pontos-composicao-mb");
    $("#atributo").data("valid", true);
  } else {
    $("#atributo .pontos-composicao span").removeClass("text-danger");
    $("#atributo .pontos-alerta").css("display", "none");
    $("#atributo .pontos-ok").css("display", "none");
    $("#atributo .pontos-composicao").addClass("pontos-composicao-mb");
    $("#atributo").data("valid", false);
  }
  validaPasso();
}

function updatePontosRestantes() {
  const pontosGastos = $(".atributo-gastos");
  let pontosGastosTotais = 0;

  $.each(pontosGastos, (index, pontoGasto) => {
    const pontoGastoInt = parseInt($(pontoGasto).text());
    pontosGastosTotais += pontoGastoInt;

    if (pontoGastoInt === 0) {
      $(pontoGasto).addClass("atributo-gasto-nulo");
      $(pontoGasto).parents(".atributo-titulo").addClass("atributo-titulo-nulo");
    } else {
      $(pontoGasto).removeClass("atributo-gasto-nulo");
      $(pontoGasto).parents(".atributo-titulo").removeClass("atributo-titulo-nulo");
    }
  });

  const pontosDisponiveis = parseInt($("#atributo .pontos-composicao .pontos-disponiveis").text());
  const pontosRestantes = $("#atributo .pontos-composicao .pontos-restantes");
  $(pontosRestantes).text(pontosDisponiveis - pontosGastosTotais);
}

function updatePontosDisponiveis() {
  $("#tamanho .bi-arrow-right-square-fill").on("mouseup", () => {
    let pontosCategoria = parseInt($("#categoria .composicao").text());
    let pontosVivencia = $("#idade .vivenciaComposicao").text();
    pontosVivencia = pontosVivencia === "-" ? 0 : parseInt(pontosVivencia);
    let pontosSoma = pontosCategoria + pontosVivencia;
    $("#atributo .pontos-composicao .pontos-disponiveis").text(pontosSoma);
  });

  $("#tamanho .bi-arrow-right-square-fill").one("mouseup", () => {
    const pontos = $("#atributo .pontos-composicao .pontos-disponiveis").text();
    $("#atributo .pontos-composicao .pontos-restantes").text(pontos);
  });
}

function changeAtributo() {
  const atributos = contentAtributo();
  const contentLoaded = setInterval(() => {
    if (atributos.length > 0) {
      clearInterval(contentLoaded);
      loadPontos(atributos);
      updatePontosDisponiveis();
      handlePontos();
      updatePontosRestantes();
      $("#atributo").data("valid", false);
    }
  }, 100);

  $("#categoria select").on("change", () => resetPontos());
  $("#idade input").focus(() => resetPontos());
  $("#idade input").on("touchend", () => resetPontos());
  $("#idade .idade-mais").on("click", () => resetPontos());
  $("#idade .idade-menos").on("click", () => resetPontos());
}

export default changeAtributo;