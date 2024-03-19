import Conduta from "../content/classes/conduta.js";
import Graduacao from "../content/classes/graduacao.js";
import ContentConduta from "../content/interfaces/conduta.js";

interface ItemWithValue {
  id: string;
  titulo: string;
  value: number;
}

//@ts-ignore
const deviceDesktop = $(window).width() >= 1024;
const eventType = deviceDesktop ? "click" : "touchend";

let graduacoesListValue: Array<ItemWithValue> = [];

enum Pontos {
  lvl1 = 1,
  lvl2 = 3,
  lvl3 = 6,
  lvl4 = 10,
  lvl5 = 15
}

function loadPontos(conduta: ContentConduta) {
  const titulo = conduta.titulo;
  const id = conduta.id;
  const ganhosEscolha = conduta.ganhos.graduacao.escolha;
  const ganhosSimples = conduta.ganhos.graduacao.simples;

  $("#graduacao-conduta .graduacao-conduta-ganhos").append(`
    <div class="conduta-ganho ${id}">
      <p class="conduta-ganho-titulo">${titulo}</p>
      <div></div>
    </div>
  `);

  $.each(ganhosEscolha, (_index, ganho) => {
    $("#graduacao-conduta .graduacao-conduta-ganhos").find(`.conduta-ganho.${id}`).append(`
      <div class="conduta-ganho-item escolha"></div>
    `);
    $(`<span class="conduta-ganho-item-nome">${ganho.nome}</span>`)
      .appendTo(`#graduacao-conduta .graduacao-conduta-ganhos .conduta-ganho.${id} .conduta-ganho-titulo + div`);

    const opcoes = ganho.opcoes;

    $.each(opcoes, (_index, opcao) => {
      const opcaoGraduacao = Graduacao.getItemById(opcao);
      const opcaoItensTipo = opcaoGraduacao?.titulo;
      const opcaoItens = opcaoGraduacao?.itens;

      $.each(opcaoItens, (_index, opcaoItem) => {
        //@ts-ignore
        const opcaoTitulo = opcaoItem.titulo;
        //@ts-ignore
        const opcaoId = opcaoItem.id;
        //@ts-ignore
        const opcaoDescricao = opcaoItem.descricao;
        const pontosDisponiveis = ganho.pontos;

        if (_index === 0) {
          $(`#graduacao-conduta .graduacao-conduta-ganhos .conduta-ganho.${id} .conduta-ganho-item:last`).append(`
            <div class="conduta-ganho-tipo">${opcaoItensTipo}:</div>
            <div class="graduacao-pontos-habilidade graduacao-pontos-habilidade-mb text-center">
              <span class="pontos-restantes">${pontosDisponiveis}</span>
              <span>/</span>
              <span class="pontos-disponiveis">${pontosDisponiveis}</span>
              <span class="pontos-alerta d-none">
                <i class="bi bi-exclamation-triangle"></i>
                Pontos excedentes
              </span>
              <span class="pontos-ok d-none">
                <i class="bi bi-check-circle"></i>
                Pontos distribuídos
              </span>
            </div>
          `);
        }

        $(`#graduacao-conduta .graduacao-conduta-ganhos .conduta-ganho.${id} .conduta-ganho-item:last`).append(`
          <div class="conduta-ganho-item-pontos">
            <div class="graduacao-header text-center">
              <p class="graduacao-titulo text-white graduacao-titulo-nulo">
                ${opcaoTitulo}
                <i class="bi bi-info-circle" title="${opcaoDescricao}" style="color: #808080;"></i>
              </p>
              <p class="graduacao-gastos graduacao-gasto-nulo">0</p>
            </div>
            <div class="graduacao-pontos ${opcaoId}">
              <i class="bi bi-square"></i>
              <i class="bi bi-square"></i>
              <i class="bi bi-square"></i>
              <i class="bi bi-square"></i>
              <i class="bi bi-square"></i>
            </div>
          </div>
        `);
      });
    });
  });

  $.each(ganhosSimples, (_index, ganho) => {
    $("#graduacao-conduta .graduacao-conduta-ganhos").find(`.conduta-ganho.${id}`).append(`
      <div class="conduta-ganho-item simples"></div>
    `);
    $(`<span class="conduta-ganho-item-nome">${ganho.nome}</span>`)
      .appendTo(`#graduacao-conduta .graduacao-conduta-ganhos .conduta-ganho.${id} .conduta-ganho-titulo + div`);

    const opcoes = ganho.opcoes;
    $.each(opcoes, (_index, opcao) => {
      const opcaoGraduacao = Graduacao.getItemById(opcao);
      const opcaoItensTipo = opcaoGraduacao?.titulo;
      const opcaoItens = opcaoGraduacao?.itens;

      $.each(opcaoItens, (_index, opcaoItem) => {
        //@ts-ignore
        const opcaoTitulo = opcaoItem.titulo;
        //@ts-ignore
        const opcaoId = opcaoItem.id;
        //@ts-ignore
        const opcaoDescricao = opcaoItem.descricao;
        const pontosDisponiveis = ganho.pontos;

        if (_index === 0) {
          $(`#graduacao-conduta .graduacao-conduta-ganhos .conduta-ganho.${id} .conduta-ganho-item:last`).append(`
            <div class="conduta-ganho-tipo">${opcaoItensTipo}</div>
            <div class="graduacao-pontos-habilidade graduacao-pontos-habilidade-mb text-center">
              <span class="pontos-restantes">${pontosDisponiveis}</span>
              <span>/</span>
              <span class="pontos-disponiveis">${pontosDisponiveis}</span>
              <span class="pontos-alerta d-none">
                <i class="bi bi-exclamation-triangle"></i>
                Pontos excedentes
              </span>
              <span class="pontos-ok d-none">
                <i class="bi bi-check-circle"></i>
                Pontos distribuídos
              </span>
            </div>
          `);
        }

        $(`#graduacao-conduta .graduacao-conduta-ganhos .conduta-ganho.${id} .conduta-ganho-item:last`).append(`
          <div class="conduta-ganho-item-pontos">
            <div class="graduacao-header text-white text-center">
              <p class="graduacao-titulo graduacao-titulo-nulo">
                ${opcaoTitulo}
                <i class="bi bi-info-circle" title="${opcaoDescricao}" style="color: #808080;"></i>
                </p>
              <p class="graduacao-gastos graduacao-gasto-nulo">0</p>
            </div>
            <div class="graduacao-pontos ${opcaoId}">
              <i class="bi bi-square"></i>
              <i class="bi bi-square"></i>
              <i class="bi bi-square"></i>
              <i class="bi bi-square"></i>
              <i class="bi bi-square"></i>
            </div>
          </div>
        `);
      });
    });
  });

  $("#graduacao-conduta .conduta-ganho:first").addClass("current");
}

function updatePontos(graduacaoId: string, pontos: number) {
  $.each(graduacoesListValue, (_index, item) => {
    if (graduacaoId === item.id) {
      item.value = pontos;
      return false;
    }
  });
}

function calculatePontos() {
  const condutaAtualPontos = $("#graduacao-conduta .conduta-ganho.current").find(".graduacao-pontos").get();

  $.each(graduacoesListValue, (_index, item) => {
    if (item.value > 0) {
      const graduacao = item.id;
      const pontos = item.value;
      $.each(condutaAtualPontos, (_index, condutaPontos) => {
        if ($(condutaPontos).hasClass(graduacao)) {
          const level = Pontos[pontos];
          const levelIndex = level.replace("lvl", "").trim();
          const levelIndexInt = parseInt(levelIndex) - 1;
          const quadrados = $(condutaPontos).find("i").get();
          $(quadrados[levelIndexInt]).off();
          $(quadrados[levelIndexInt]).prevAll().off();
          $(quadrados[levelIndexInt]).removeClass("bi-square");
          $(quadrados[levelIndexInt]).prevAll().removeClass("bi-square");
          $(quadrados[levelIndexInt]).addClass("bi-slash-square");
          $(quadrados[levelIndexInt]).prevAll().addClass("bi-slash-square");
        }
      });
    }
  });
}

function handleProximaConduta() {
  $("#graduacao-conduta .graduacao-button-holder button").off();
  $("#graduacao-conduta .graduacao-button-holder button").on(eventType, () => {
    $("#graduacao-conduta .conduta-ganho.current").next().addClass("current");
    $("#graduacao-conduta .conduta-ganho.current:first").removeClass("current");
    $("#graduacao-conduta .graduacao-button-holder button").addClass("disabled");

    if ($("#graduacao-conduta .conduta-ganho.current:last").length === 0) {
      $("#graduacao-conduta .graduacao-button-holder").addClass("d-none");
      $("#graduacao-conduta .graduacao-sucesso").removeClass("d-none");
      $("#graduacao-conduta .graduacao-resultado").removeClass("d-none");
      handleResult();
    }
    $(window).scrollTop(250);
    calculatePontos();
  });
}

function handlePontosSimples(e: any) {
  const simples = $(e.currentTarget).parents(".conduta-ganho-item").attr("class")?.includes("simples");
  if (simples) {
    const conduta = $(e.currentTarget).parents(".conduta-ganho-item");
    const pontosDisponiveis = $(e.currentTarget).parents(".conduta-ganho-item").find(".pontos-disponiveis");
    const pontosDisponiveisInt = parseInt($(pontosDisponiveis).text());
    const pontosRestantes = $(e.currentTarget).parents(".conduta-ganho-item").find(".pontos-restantes");
    const pontosTotais = $(e.currentTarget).parents(".conduta-ganho-item").find(".graduacao-gastos:not(.graduacao-gasto-nulo)").get();
    const pontosOk = $(e.currentTarget).parents(".conduta-ganho-item").find(".pontos-ok");
    const pontosAlerta = $(e.currentTarget).parents(".conduta-ganho-item").find(".pontos-alerta");

    let pontosOutrasCondutasTotal = 0;
    const pontosOutrasCondutas = $(e.currentTarget).parents(".conduta-ganho").find(".graduacao-pontos").get();
    $.each(pontosOutrasCondutas, (_index, pontos) => {
      if ($(pontos).parent().find(".bi-square-fill").length > 0) {
        const qdsLength = $(pontos).find("i.bi-slash-square").length;
        const pontosCalculo = (1 + qdsLength) * qdsLength / 2;
        pontosOutrasCondutasTotal += pontosCalculo;
      }
    });

    let pontosTotaisInt = 0;
    $.each(pontosTotais, (i, e) => {
      const ponto = $(e).text();
      pontosTotaisInt += parseInt(ponto);
    });
    pontosTotaisInt -= pontosOutrasCondutasTotal;

    const pontosRestantesText = pontosDisponiveisInt - pontosTotaisInt;
    $(pontosRestantes).text(pontosRestantesText);

    if (pontosTotaisInt === pontosDisponiveisInt) {
      $(pontosOk).removeClass("d-none");
      $(pontosAlerta).addClass("d-none");
      const pontosDistribuidos = $(e.currentTarget).parents(".conduta-ganho").find(".pontos-ok").get();
      $.each(pontosDistribuidos, (_index, pontoDistribuido) => {
        if ($(pontoDistribuido).hasClass("d-none")) {
          $("#graduacao-conduta").find(".graduacao-button-holder button").addClass("disabled");
          return false;
        }
        $("#graduacao-conduta").find(".graduacao-button-holder button").removeClass("disabled");
      })
      $(conduta).find(".graduacao-pontos-habilidade").removeClass("graduacao-pontos-habilidade-mb");
    } else if (pontosTotaisInt > pontosDisponiveisInt) {
      $(pontosOk).addClass("d-none");
      $(pontosAlerta).removeClass("d-none");
      $("#graduacao-conduta").find(".graduacao-button-holder button").addClass("disabled");
      $(conduta).find(".graduacao-pontos-habilidade").removeClass("graduacao-pontos-habilidade-mb");
    } else {
      $(pontosOk).addClass("d-none");
      $(pontosAlerta).addClass("d-none");
      $("#graduacao-conduta").find(".graduacao-button-holder button").addClass("disabled");
      $(conduta).find(".graduacao-pontos-habilidade").addClass("graduacao-pontos-habilidade-mb");
    }
  }
}

function handlePontosEscolha(e: any) {
  const escolha = $(e.currentTarget).parents(".conduta-ganho-item").attr("class")?.includes("escolha");
  if (escolha) {
    const conduta = $(e.currentTarget).parents(".conduta-ganho-item");
    const pontosDisponiveis = $(conduta).find(".pontos-disponiveis").get()[0];
    const pontosDisponiveisInt = parseInt($(pontosDisponiveis).text());
    const pontosRestantes = $(conduta).find(".pontos-restantes");
    const pontosTotais = $(e.currentTarget).parents(".conduta-ganho").find(".graduacao-gastos:not(.graduacao-gasto-nulo)").get();
    const pontosOk = $(e.currentTarget).parents(".conduta-ganho-item").find(".pontos-ok");
    const pontosAlerta = $(e.currentTarget).parents(".conduta-ganho-item").find(".pontos-alerta");

    let pontosOutrasCondutasTotal = 0;
    const pontosOutrasCondutas = $(e.currentTarget).parents(".conduta-ganho").find(".graduacao-pontos").get();
    $.each(pontosOutrasCondutas, (_index, pontos) => {
      if ($(pontos).parent().find(".bi-square-fill").length > 0) {
        const qdsLength = $(pontos).find("i.bi-slash-square").length;
        const pontosCalculo = (1 + qdsLength) * qdsLength / 2;
        pontosOutrasCondutasTotal += pontosCalculo;
      }
    });

    let pontosTotaisInt = 0;
    $.each(pontosTotais, (i, e) => {
      const ponto = $(e).text();
      pontosTotaisInt += parseInt(ponto);
    });
    pontosTotaisInt -= pontosOutrasCondutasTotal;

    const pontosRestantesText = pontosDisponiveisInt - pontosTotaisInt;
    $(pontosRestantes).text(pontosRestantesText);

    if (pontosTotaisInt === pontosDisponiveisInt) {
      $(pontosOk).removeClass("d-none");
      $(pontosAlerta).addClass("d-none");
      $(conduta).find(".graduacao-pontos-habilidade").removeClass("graduacao-pontos-habilidade-mb");
      $("#graduacao-conduta").find(".graduacao-button-holder button").removeClass("disabled");
    } else if (pontosTotaisInt > pontosDisponiveisInt) {
      $(pontosOk).addClass("d-none");
      $(pontosAlerta).removeClass("d-none");
      $(conduta).find(".graduacao-pontos-habilidade").removeClass("graduacao-pontos-habilidade-mb");
      $("#graduacao-conduta").find(".graduacao-button-holder button").addClass("disabled");
    } else {
      $(pontosOk).addClass("d-none");
      $(pontosAlerta).addClass("d-none");
      $(conduta).find(".graduacao-pontos-habilidade").addClass("graduacao-pontos-habilidade-mb");
      $("#graduacao-conduta").find(".graduacao-button-holder button").addClass("disabled");
    }
  }
}

function handlePontos() {
  const selector = $("#graduacao-conduta .graduacao-pontos i");
  $(selector).on(eventType, (e) => $(e).off());
  $(selector).on(eventType, (e) => {
    $(e.currentTarget).toggleClass("bi-square");
    $(e.currentTarget).toggleClass("bi-square-fill");

    const prevAll = $(e.currentTarget).prevAll();
    $.each(prevAll, (i, prev) => {
      if (!$(prev).hasClass("bi-slash-square")) {
        $(prev).addClass("bi-square-fill");
        $(prev).removeClass("bi-square");
      }
    });

    const nextAll = $(e.currentTarget).nextAll();
    $.each(nextAll, (i, next) => {
      $(next).removeClass("bi-square-fill");
      $(next).addClass("bi-square");
    });

    let pontos = $(e.currentTarget).parent().find(".bi-square-fill").length;
    pontos += $(e.currentTarget).parent().find(".bi-slash-square").length;
    pontos = (1 + pontos) * pontos / 2;

    const titulo = $(e.currentTarget).parents(".conduta-ganho-item-pontos").find(".graduacao-titulo");
    const pontosGastos = $(e.currentTarget).parents(".conduta-ganho-item-pontos").find(".graduacao-gastos");
    if (pontos > 0) {
      $(titulo).removeClass("graduacao-titulo-nulo");
      $(pontosGastos).removeClass("graduacao-gasto-nulo");
    } else {
      $(titulo).addClass("graduacao-titulo-nulo");
      $(pontosGastos).addClass("graduacao-gasto-nulo");
    }

    //Casos em que os pontos vêm de outra conduta
    if ($(e.currentTarget).hasClass("bi-square")
      && $(e.currentTarget).prev().hasClass("bi-slash-square")) {
      $(pontosGastos).text(0);
    } else {
      $(pontosGastos).text(pontos);
    }

    let graduacaoId = $(e.currentTarget).parents(".graduacao-pontos").attr("class");
    graduacaoId = graduacaoId?.replace("graduacao-pontos", "").trim();

    if (typeof graduacaoId !== "undefined") {
      updatePontos(graduacaoId, pontos);
    }

    handlePontosSimples(e);
    handlePontosEscolha(e);
  });
}

function resetPontos() {
  //@ts-ignore
  graduacoesListValue = "";
  graduacoesListValue = [] as Array<ItemWithValue>;

  $("#graduacao-conduta .graduacao-conduta-ganhos").empty();
  $("#atributo .avancar-passo i:last").trigger("mouseup");
  $("#graduacao-conduta .graduacao-sucesso").addClass("d-none");
  $("#graduacao-conduta .graduacao-button-holder").removeClass("d-none");
  $("#graduacao-conduta .graduacao-resultado").addClass("d-none");
  $("#graduacao-conduta .graduacao-resultado").find("*:not(span)").remove();
}

function handleResult() {
  const resultadoHtml = $("#graduacao-conduta .graduacao-resultado");
  $.each(graduacoesListValue, (_index, item) => {
    if (item.value > 0) {
      const pontos = Pontos[item.value].replace("lvl", "").trim();

      $(resultadoHtml).append(`
        <div class="conduta-ganho-resultado-pontos">
          <div class="resultado-header text-white text-center">
            <p class="resultado-titulo">
              ${item.titulo}
            </p>
          </div>
          <div class="resultado-pontos ${item.id}">
            <i class="bi bi-square"></i>
            <i class="bi bi-square"></i>
            <i class="bi bi-square"></i>
            <i class="bi bi-square"></i>
            <i class="bi bi-square"></i>
          </div>
        </div>
      `);

      for (let i = 0; i < parseInt(pontos); i++) {
        let quadrados = $(resultadoHtml).find(`.resultado-pontos.${item.id} i`).get();
        $(quadrados[i]).removeClass("bi-square");
        $(quadrados[i]).addClass("bi-square-fill");
      }
    }
  });
}

function handleModalInfo() {
  const modalInfoButtons = $("#graduacao-conduta .conduta-ganho-item .bi-info-circle").get();
  $.each(modalInfoButtons, (_index, infoButton) => {
    $(infoButton).off();
  });
  $.each(modalInfoButtons, (_index, infoButton) => {
    $(infoButton).on(eventType, (e) => {
      const habilidade = $(e.currentTarget).parents(".graduacao-titulo").text().trim();
      const descricao = $(e.currentTarget).attr("title")?.toString();
      if (typeof habilidade !== "undefined" && typeof descricao !== "undefined") {
        $("#habilidadeModal .modal-habilidade-nome h2").text(habilidade);
        $("#habilidadeModal .modal-habilidade-descricao p").text(descricao);
      }
      $("#habilidadeModalButton").trigger("click");
    });
  });
}

function changeGraduacaoConduta() {
  const graduacoes = Graduacao.getItems();
  let graduacoesLoaded = false;

  $("#atributo .avancar-passo i:last").on("mouseup", function () {
    if (!graduacoesLoaded) {
      graduacoesLoaded = true;
      $.each(graduacoes, (_index, graduacao) => {
        const itens = graduacao.itens;
        $.each(itens, (_index, item) => {
          //@ts-ignore
          const id = item.id;
          //@ts-ignore
          const titulo = item.titulo;
          const itemWithValue: ItemWithValue = {
            id: id,
            titulo: titulo,
            value: 0,
          }
          graduacoesListValue.push(itemWithValue);
        });
      });

      const condutasHtml = $("#conduta .conduta-descricao-selecionada:not(.d-none)").get();
      const condutas: Array<ContentConduta> = [];

      $.each(condutasHtml, (index, conduta) => {
        const id = $(conduta).attr("id")?.toLowerCase().replace("conduta", "");
        if (typeof id !== "undefined") {
          const conduta = Conduta.getItemById(id);
          const contentLoaded = setInterval(() => {
            if (typeof conduta !== "undefined") {
              clearInterval(contentLoaded);
              condutas.push(conduta);
            }
          }, 10);
        }
      });

      const condutasLoaded = setInterval(() => {
        if (condutas.length === condutasHtml.length) {
          clearInterval(condutasLoaded);
          $.each(condutas, (_index, conduta) => {
            loadPontos(conduta);
          });
          handlePontos();
          handleModalInfo();
          handleProximaConduta();
        }
      }, 10);
    }
  });

  let condutas = [];
  const condutasLoaded = setInterval(() => {
    condutas = $("#conduta .condutas-descricao .conduta-descricao").get();
    if (condutas.length > 0) {
      clearInterval(condutasLoaded);
      $("#conduta .conduta-descricao .conduta-check").on(eventType, () => {
        graduacoesLoaded = false;
        resetPontos();
      });

      //Refazer condutas de graduação
      $("#graduacao-conduta .graduacao-sucesso .refazer-button").on(eventType, () => {
        $("#refazerGraduacaoModalButton").trigger("click");
      });
      $("#refazerGraduacaoModal .button-confirm").on(eventType, () => {
        graduacoesLoaded = false;
        resetPontos();
      });
    }
  }, 100);
}

export default changeGraduacaoConduta;