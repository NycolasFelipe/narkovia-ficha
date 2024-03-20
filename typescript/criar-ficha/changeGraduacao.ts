import Graduacao from "../content/classes/graduacao.js";
import ContentGraduacao from "../content/interfaces/graduacao.js";
import validaFicha from "./validaFicha.js";

//@ts-ignore
const deviceDesktop = $(window).width() >= 1024;
const eventType = deviceDesktop ? "click" : "touchend";

enum Pontos {
  lvl1 = 1,
  lvl2 = 3,
  lvl3 = 6,
  lvl4 = 10,
  lvl5 = 15
}

function handlePontos() {
  const selector = $("#graduacao .graduacao-pontos i");
  $(selector).on(eventType, (e) => $(e).off());
  $(selector).on(eventType, (e) => {
    $(e.currentTarget).toggleClass("bi-square");
    $(e.currentTarget).toggleClass("bi-square-fill");

    const prevAll = $(e.currentTarget).prevAll();
    $.each(prevAll, (_i, prev) => {
      if (!$(prev).hasClass("bi-slash-square")) {
        $(prev).addClass("bi-square-fill");
        $(prev).removeClass("bi-square");
      }
    });

    const nextAll = $(e.currentTarget).nextAll();
    $.each(nextAll, (_i, next) => {
      $(next).removeClass("bi-square-fill");
      $(next).addClass("bi-square");
    });

    let pontos = $(e.currentTarget).parent().find(".bi-square-fill").length;
    pontos += $(e.currentTarget).parent().find(".bi-slash-square").length;
    pontos = (1 + pontos) * pontos / 2;

    const titulo = $(e.currentTarget).parents(".graduacao-item").find(".graduacao-item-titulo");
    const pontosGastos = $(e.currentTarget).parents(".graduacao-item").find(".graduacao-gastos");
    if (pontos > 0) {
      $(titulo).removeClass("graduacao-item-titulo-nulo");
      $(pontosGastos).removeClass("graduacao-gasto-nulo");
    } else {
      $(titulo).addClass("graduacao-item-titulo-nulo");
      $(pontosGastos).addClass("graduacao-gasto-nulo");
    }

    //Casos em que os pontos vêm de outra conduta
    if ($(e.currentTarget).hasClass("bi-square")
      && $(e.currentTarget).prev().hasClass("bi-slash-square")) {
      let pontosAnteriores = $(e.currentTarget).prevAll(".bi-slash-square").length;
      pontosAnteriores = (1 + pontosAnteriores) * pontosAnteriores / 2;
      $(pontosGastos).text(pontosAnteriores);
    } else {
      $(pontosGastos).text(pontos);
    }

    // let graduacaoId = $(e.currentTarget).parents(".graduacao-pontos").attr("class");
    // graduacaoId = graduacaoId?.replace("graduacao-pontos", "").trim();

    // if (typeof graduacaoId !== "undefined") {
    //   updatePontos(graduacaoId, pontos);
    // }

    updatePontosRestantes();
  });
}

function updatePontosRestantes() {
  const graduacao = $("#graduacao");
  const pontosDisponiveis = $(graduacao).find(".pontos-disponiveis");
  const pontosDisponiveisInt = parseInt($(pontosDisponiveis).text());
  const pontosRestantes = $(graduacao).find(".pontos-restantes");

  let pontosTotaisInt = 0;

  const pontosHabilidade = $(graduacao).find(".graduacao-pontos").get();
  $.each(pontosHabilidade, (_index, pontoHabilidade) => {
    const ultimoQuadrado = $(pontoHabilidade).find(".bi-square-fill:last");
    if (ultimoQuadrado.length > 0) {
      let pontosConduta = $(ultimoQuadrado).prevAll("i.bi-slash-square").length;
      pontosConduta = (1 + pontosConduta) * pontosConduta / 2;
      const pontos = $(ultimoQuadrado).attr("data")?.toString();
      if (typeof pontos !== "undefined") {
        const pontosInt = parseInt(pontos);
        pontosTotaisInt += pontosInt - pontosConduta;
      }
    }
  });

  const pontosRestantesText = pontosDisponiveisInt - pontosTotaisInt;
  $(pontosRestantes).text(pontosRestantesText);

  if (pontosTotaisInt === pontosDisponiveisInt) {
    $("#graduacao .pontos-alerta").addClass("d-none");
    $("#graduacao .pontos-ok").removeClass("d-none");
    $("#graduacao .pontos-graduacao").removeClass("pontos-graduacao-mb");
    $("#graduacao .warning-pontos-excedentes").addClass("d-none");
    $("#graduacao").data("valid", true);
    validaFicha();
  } else if (pontosTotaisInt > pontosDisponiveisInt) {
    $("#graduacao .pontos-alerta").removeClass("d-none");
    $("#graduacao .pontos-ok").addClass("d-none");
    $("#graduacao .pontos-graduacao").removeClass("pontos-graduacao-mb");
    $("#graduacao .warning-pontos-excedentes").removeClass("d-none");
    $("#graduacao").data("valid", false);
  } else {
    $("#graduacao .pontos-alerta").addClass("d-none");
    $("#graduacao .pontos-ok").addClass("d-none");
    $("#graduacao .pontos-graduacao").addClass("pontos-graduacao-mb");
    $("#graduacao .warning-pontos-excedentes").addClass("d-none");
    $("#graduacao").data("valid", false);
  }
}

function loadPontosConduta() {
  $("#graduacao-conduta .avancar-passo i:last").one("mouseup", function () {
    const pontosConduta = JSON.parse($("#graduacao-conduta").data("pontos"));

    $.each(pontosConduta, (_index, ponto) => {
      if (ponto.value > 0) {
        const id: string = ponto.id;
        const value: string = ponto.value.toString();
        const pontosGraduacao = $("#graduacao").find(`.graduacao-item.${id} .graduacao-pontos i`).get();

        $.each(pontosGraduacao, (_index, pontoGraduacao) => {
          if ($(pontoGraduacao).attr("data") === value) {
            $(pontoGraduacao).trigger("click");
            $(pontoGraduacao).addClass("bi-slash-square");
            $(pontoGraduacao).removeClass("bi-square");
            $(pontoGraduacao).removeClass("bi-square-fill");
            $(pontoGraduacao).prevAll().addClass("bi-slash-square");
            $(pontoGraduacao).prevAll().removeClass("bi-square");
            $(pontoGraduacao).prevAll().removeClass("bi-square-fill");
          }
        });
      }
    });

    $("#graduacao .pontos-restantes").text($("#graduacao .pontos-disponiveis").text());
  });
}

function loadPontos(graduacoes: Array<ContentGraduacao>) {
  $.each(graduacoes, (_index, graduacao) => {
    const titulo = graduacao.titulo;
    const id = graduacao.id;
    const itens = graduacao.itens;

    $("#graduacao .graduacoes").append(`
      <div class="${id} graduacao">
        <div class="graduacao-titulo">${titulo}</div>
        <div class="graduacao-items"></div>
      </div>
    `);

    $.each(itens, (_index, item) => {
      //@ts-ignore
      const opcaoTitulo = item.titulo;
      //@ts-ignore
      const opcaoId = item.id;
      //@ts-ignore
      const opcaoDescricao = item.descricao;

      $("#graduacao .graduacoes").find(`.graduacao.${id} .graduacao-items`).append(`
        <div class="graduacao-item ${opcaoId}">
          <div class="graduacao-item-header text-white">
            <p class="graduacao-item-titulo graduacao-item-titulo-nulo">
              ${opcaoTitulo}
              <i class="bi bi-info-circle" title="${opcaoDescricao}" style="color: #808080;"></i>
            </p>
            <p class="graduacao-gastos graduacao-gasto-nulo">0</p>
          </div>
          <div class="graduacao-pontos">
            <i class="bi bi-square" data="${Pontos['lvl1']}"></i>
            <i class="bi bi-square" data="${Pontos['lvl2']}"></i>
            <i class="bi bi-square" data="${Pontos['lvl3']}"></i>
            <i class="bi bi-square" data="${Pontos['lvl4']}"></i>
            <i class="bi bi-square" data="${Pontos['lvl5']}"></i>
          </div>
        </div>
      `);
    })

  });
  console.log(graduacoes);

}

function handleModalInfo() {
  const modalInfoButtons = $("#graduacao .graduacao-item .bi-info-circle").get();
  $.each(modalInfoButtons, (_index, infoButton) => {
    $(infoButton).off();
  });
  $.each(modalInfoButtons, (_index, infoButton) => {
    $(infoButton).on(eventType, (e) => {
      const habilidade = $(e.currentTarget).parents(".graduacao-item-titulo").text().trim();
      const descricao = $(e.currentTarget).attr("title")?.toString();
      if (typeof habilidade !== "undefined" && typeof descricao !== "undefined") {
        $("#habilidadeModal .modal-habilidade-nome h2").text(habilidade);
        $("#habilidadeModal .modal-habilidade-descricao p").text(descricao);
      }
      $("#habilidadeModalButton").trigger("click");
    });
  });
}

function resetPontos() {
  $("#idade input").on("change", () => {
    const graduacoesCategoria = $("#categoria .graduacao").text();
    const graduacoesVivencia = $("#idade .vivenciaGraduacao").text().replace("+", "");
    const pontosCategoria = parseInt(graduacoesCategoria);
    const pontosVivencia = graduacoesVivencia === "-" ? 0 : parseInt(graduacoesVivencia);
    const pontos = pontosCategoria + pontosVivencia;
    $("#graduacao .pontos-disponiveis").text(pontos);
    loadPontosConduta();
  });
}

function changeGraduacao() {
  const graduacoes = Graduacao.getItems();
  const contentLoaded = setInterval(() => {
    if (graduacoes.length === 6) {
      clearInterval(contentLoaded);
      loadPontos(graduacoes);
      loadPontosConduta();
      handlePontos();
      resetPontos();
      handleModalInfo();
    }
  }, 10);
}

export default changeGraduacao;