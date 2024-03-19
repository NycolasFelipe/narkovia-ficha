import Conduta from "../content/classes/conduta.js";
import ContentConduta from "../content/interfaces/conduta";
import validaFicha from "./validaFicha.js";

let condutaItems: Array<ContentConduta>;
let condutasDisponiveis = 0;
let condutasSelecionadas = 0;

function handleHint() {
  const interval = setInterval(() => {
    $((".condutas-swipe-hint")).fadeOut(500);
    $((".condutas-swipe-hint")).fadeIn(500);
  }, 1500);

  function hideHint() {
    clearInterval(interval);
    $(".condutas-swipe-hint").addClass("d-none");
  }
  $("#conduta .slick-slider").on("swipe", () => hideHint());
  $("#conduta .slick-slider").on("click", () => hideHint());
}

function loadCondutas(container: string) {
  $.each(condutaItems, (_index, conduta) => {
    const id = conduta.id;
    const tipo = conduta.tipo;
    const titulo = conduta.titulo;
    const descricao = conduta.descricao;
    const maestria = conduta.ganhos.maestria;
    const especialidade = conduta.ganhos.especialidade;
    const graduacao = conduta.ganhos.graduacao.escolha.concat(conduta.ganhos.graduacao.simples);
    const condutaSelecionada = container === ".condutas-selecionadas";

    const condutaDiv = `
      <div 
        id="${id}" 
        data="${tipo}" 
        class="conduta-descricao ${condutaSelecionada ? "conduta-descricao-selecionada d-none" : ""}"
      >
        <div class="conduta-legenda ${condutaSelecionada ? "" : "d-none"}">
          Conduta selecionada
        </div>
        <div class="descricao-titulo d-flex mb-2" style="position: relative;">
          <i class="bi ${condutaSelecionada ? "bi-check-square-fill" : "bi-square"} conduta-check" style="color: ${condutaSelecionada ? "#61d461" : "#fff"}; cursor: pointer;"></i>
          <p class="conduta-titulo text-white ps-2" style="cursor: pointer; margin-bottom: 0; font-size: 1.1rem;">
            ${titulo}
          </p>
          <i class="bi bi-chevron-right"></i>
          <i class="bi bi-lock-fill ${condutaSelecionada ? "" : "d-none"}" style="color: #61d461; position: absolute; right: 0; top: -25px;"></i>
        </div>
        <div class="descricao-corpo d-none">
          <p class="text-white" style="font-size: 0.9rem;">
            ${descricao}
          </p>
        </div>
      </div>
    `;
    $(container).append(condutaDiv);

    const condutaDivDescricao = `#conduta #${id}.conduta-descricao${condutaSelecionada ? ".conduta-descricao-selecionada" : ""}`;

    // Ganhos de maestria
    if (maestria.length > 0) {
      $(condutaDivDescricao).append(`
        <div class="descricao-ganhos-titulo d-none">Ganhos de maestria:</div>
      `);
      $.each(maestria, (_index, item) => {
        $(condutaDivDescricao).append(`
        <div class="descricao-ganhos item-maestria d-flex d-none" data="${item.id}">
        <i class="bi bi-feather" style="color: #fff;"></i>
        <p class="conduta-ganho text-white ps-2">${item.nome}</div>
        </div>
        `);
      });
    }

    // Ganhos de especialidade
    if (especialidade.length > 0) {
      $(condutaDivDescricao).append(`
        <div class="descricao-ganhos-titulo d-none">Ganhos de especialidade:</div>
      `);
      $.each(especialidade, (_index, item) => {
        $(condutaDivDescricao).append(`
        <div class="descricao-ganhos item-especialidade d-flex d-none" data="${item.id}">
        <i class="bi bi-book" style="color: #fff;"></i>
        <p class="conduta-ganho text-white ps-2">${item.nome}</div>
        </div>
        `);
      });
    }

    // Ganhos de graduação
    if (graduacao.length > 0) {
      $(condutaDivDescricao).append(`
        <div class="descricao-ganhos-titulo d-none">Ganhos de graduação:</div>
      `);
      $.each(graduacao, (_index, item) => {
        $(condutaDivDescricao).append(`
          <div class="descricao-ganhos item-graduacao d-flex d-none">
            <i class="bi bi-lightbulb" style="color: #fff;"></i>
            <p class="conduta-ganho text-white ps-2">${item.nome}</div>
          </div>
        `);
      });
    }
  });

  $(`${container} .descricao-titulo *:not(.conduta-check)`).off("click");
  $(`${container} .descricao-titulo *:not(.conduta-check)`).on("click", (e) => {
    const conduta = $(e.currentTarget).parent().parent();
    $(conduta).find(".descricao-corpo").toggleClass("d-none");
    $(conduta).find(".descricao-ganhos").toggleClass("d-none");
    $(conduta).find(".descricao-ganhos-titulo").toggleClass("d-none");
    $(conduta).find(".bi-chevron-right").toggleClass("bi-chevron-right-rotate");
  });
}

function validate() {
  if (condutasDisponiveis === condutasSelecionadas) {
    $("#conduta").data("valid", true);

    //Atualiza preview
    const condutas = $(".conduta-descricao-selecionada:not(.d-none)");
    $.each(condutas, (_index, conduta) => {
      let id = $(conduta).attr("id");
      let titulo = $(conduta).find(".conduta-titulo").text().trim();

      if (typeof id !== "undefined") {
        let tipoConduta = Conduta.getItemById(id)?.tipoTitulo;

        if (typeof tipoConduta !== "undefined") {
          let previewText = `${titulo} (${tipoConduta.toLowerCase()})`;
          $(".preview-conduta + ul").prepend(`<li class="preview-conduta-item">${previewText}</li>`);
        }
      }
    });
  } else {
    $("#conduta").data("valid", false);

    //Atualiza preview
    $(".preview-conduta + ul li:not(.preview-conduta-empty)").remove();
  }

  validaFicha();
}

function tratamentoConduta(id: string) {
  switch (id) {
    case "filha-da-primeira-luz":
      return "espuria";

    case "mestre-munkai":
      return "mun'kai";

    case "mestre-de-vislumbre":
      return "mestre-de-vislumbres";

    default:
      return id;
  }
}

function handleCondutasBloqueadas() {
  const condutasBloqueadasHtml = $(".condutas-bloqueadas p").get();
  const condutasBloqueadas = $.map(condutasBloqueadasHtml, (e, i) => {
    return $(e).attr("data");
  });

  let condutas = $(".conduta-descricao:not(.conduta-descricao-selecionada)");

  $.each(condutas, (i, conduta) => {
    $.each(condutasBloqueadas, (j, condutaBloqueada) => {
      const id = $(conduta).attr("id");
      if (typeof id !== "undefined") {
        const condutaId = tratamentoConduta(id);
        if (condutaId === condutaBloqueada) {
          $(conduta).addClass("conduta-descricao-bloqueada");
          $(conduta).prepend(`
            <div class="conduta-legenda">
              Conduta bloqueada
            </div>
          `);
          return false;
        }
      }
    });
  });
}

function hideCondutaDuplicada() {
  const selecionadas = $(".conduta-descricao-selecionada:not(.d-none)");

  $.each(selecionadas, (_index, selecionada) => {
    const id = $(selecionada).attr("id");
    const condutas = $(".conduta-descricao:not(.conduta-descricao-selecionada)");

    $.each(condutas, (_j, conduta) => {
      if ($(conduta).attr("id") === id) {
        $(conduta).addClass("d-none");
      }
    });
  });
}

function filterCondutas(condutaSlideAtual: string) {
  $.each($("#conduta .conduta-descricao:not(.conduta-descricao-selecionada)"), (_index, item) => {
    const condutaTipo = $(item).attr("data");
    condutaSlideAtual = condutaSlideAtual.toLowerCase().replace("conduta", "");
    if (condutaTipo !== condutaSlideAtual) {
      $(item).addClass("d-none");
    } else {
      $(item).removeClass("d-none");
    }
  });

  hideCondutaDuplicada();
}

function updateCondutas() {
  //@ts-ignore
  const deviceDesktop = $(window).width() >= 1024;
  const eventType = deviceDesktop ? "click" : "touchend";

  //Update conduta 
  const conduta = $("#conduta .conduta-descricao:not(.conduta-descricao-selecionada) .conduta-check");
  $(conduta).on(eventType, (e) => {
    if (condutasSelecionadas < condutasDisponiveis) {
      condutasSelecionadas++;
      const conduta = $(e.currentTarget).parent().parent();
      const condutaId = $(conduta).attr("id");
      $("#conduta").find(`.condutas-descricao #${condutaId}`).addClass("d-none");
      $("#conduta").find(`.condutas-selecionadas #${condutaId}`).removeClass("d-none");

      //Replica estado de exibição
      const corpoVisivel = !$(conduta).find(".descricao-corpo").hasClass("d-none");
      const chevronClasslist = $(conduta).find(".conduta-titulo + i").attr("class");
      const nodeDescricao = $(`#${condutaId}.conduta-descricao-selecionada .descricao-corpo`);
      const nodeGanhos = $(`#${condutaId}.conduta-descricao-selecionada .descricao-ganhos`);
      const nodeGanhosTitulo = $(`#${condutaId}.conduta-descricao-selecionada .descricao-ganhos-titulo`);
      const nodeChevron = $(`#${condutaId}.conduta-descricao-selecionada .conduta-titulo + i`);

      if (corpoVisivel) {
        $(nodeDescricao).removeClass("d-none");
        $(nodeGanhos).removeClass("d-none");
        $(nodeGanhosTitulo).removeClass("d-none");
      } else {
        $(nodeDescricao).addClass("d-none");
        $(nodeGanhos).addClass("d-none");
        $(nodeGanhosTitulo).addClass("d-none");
      }

      if (typeof chevronClasslist !== "undefined") {
        $(nodeChevron).removeClass();
        $(nodeChevron).addClass(chevronClasslist);
      }

      validate();
    }
  });

  //Update conduta selecionada
  const condutaSelecionada = $("#conduta .conduta-descricao-selecionada .conduta-check");
  $(condutaSelecionada).on(eventType, (e) => {
    condutasSelecionadas--;
    const conduta = $(e.currentTarget).parent().parent();
    const condutaId = $(conduta).attr("id");
    $("#conduta").find(`.condutas-descricao #${condutaId}`).removeClass("d-none");
    $("#conduta").find(`.condutas-selecionadas #${condutaId}`).addClass("d-none");

    //Replica estado de exibição
    const corpoVisivel = !$(conduta).find(".descricao-corpo").hasClass("d-none");
    const chevronClasslist = $(conduta).find(".conduta-titulo + i").attr("class");
    const nodeDescricao = $(`#${condutaId}.conduta-descricao:not(.conduta-descricao-selecionada) .descricao-corpo`);
    const nodeGanhos = $(`#${condutaId}.conduta-descricao:not(.conduta-descricao-selecionada) .descricao-ganhos`);
    const nodeGanhosTitulo = $(`#${condutaId}.conduta-descricao:not(.conduta-descricao-selecionada) .descricao-ganhos-titulo`);
    const nodeChevron = $(`#${condutaId}.conduta-descricao:not(.conduta-descricao-selecionada) .conduta-titulo + i`);

    if (corpoVisivel) {
      $(nodeDescricao).removeClass("d-none");
      $(nodeGanhos).removeClass("d-none");
      $(nodeGanhosTitulo).removeClass("d-none");
    } else {
      $(nodeDescricao).addClass("d-none");
      $(nodeGanhos).addClass("d-none");
      $(nodeGanhosTitulo).addClass("d-none");
    }

    if (typeof chevronClasslist !== "undefined") {
      $(nodeChevron).removeClass();
      $(nodeChevron).addClass(chevronClasslist);
    }

    const condutaSlideAtual = $(".conduta-selecionada").attr("id");
    if (typeof condutaSlideAtual !== "undefined") {
      filterCondutas(condutaSlideAtual);
      validate();
    }
  });
}

function resetCondutas() {
  $(".conduta-descricao:not(.conduta-descricao-selecionada").removeClass("d-none");
  $(".conduta-descricao-selecionada").addClass("d-none");
  condutasSelecionadas = 0;
}

function handleCondutasDisponiveis() {
  const disponiveisHtml = $(".vivenciaCondutas").text();
  $("#conduta .condutas").show();
  $(".condutas-swipe-hint").show().removeClass("d-none");
  if (disponiveisHtml === "-") {
    condutasDisponiveis = 0;
    $("#conduta .passo-descricao").html(`
      <span data="condutas-0" class='mb-0'>Sem condutas disponíves</span><br>
      <span class="text-warning" style="font-size: 0.8rem;">
        (Personagens infantes não recebem conduta)
      <span>
    `);
    $("#conduta .condutas").hide();
    $(".condutas-swipe-hint").hide();
    setTimeout(() => $("#conduta .slick-slider").trigger("click"), 100);
  } else if (disponiveisHtml === "1") {
    condutasDisponiveis = 1;
    $("#conduta .passo-descricao").html(`
      <span data="condutas-1" style="color: #61d461;">Escolha 1 conduta</span>
    `);
  } else if (disponiveisHtml === "2") {
    condutasDisponiveis = 2;
    $("#conduta .passo-descricao").html(`
      <span data="condutas-2" style="color: #61d461;">Escolha 2 condutas</span>
    `);
  } else if (disponiveisHtml === "3") {
    condutasDisponiveis = 3;
    $("#conduta .passo-descricao").html(`
      <span data="condutas-3" style="color: #61d461;">Escolha 3 condutas</span>
    `);
  }

  if (disponiveisHtml === "-") {
    $("#conduta .loading:not(.loaded)").css("filter", "opacity(0.0)");
  } else {
    $("#conduta .loading:not(.loaded)").css("filter", "opacity(1.0)");
  }

  $("#conduta .voltar-passo").on("mouseup", () => {
    $("#conduta .condutas-descricao").hide();
    $("#conduta .conduta.conduta-selecionada").removeClass("conduta-selecionada");
  });

  validate();
}

function handleEscolhaConduta() {
  $("#conduta .conduta").on("mouseup", () => {
    $("#conduta .conduta").off("mouseup");
    loadCondutas(".condutas-descricao");
    loadCondutas(".condutas-selecionadas");
    updateCondutas();
    handleCondutasBloqueadas();
  });

  $("#conduta .conduta").on("click", (e) => {
    const condutaSlideAtual = $(".conduta-selecionada").attr("id");
    const id = $(e.currentTarget).attr("id");

    if (typeof id !== "undefined") {
      if (id !== condutaSlideAtual) {
        $("#conduta .conduta").removeClass("conduta-selecionada");
        $(e.currentTarget).toggleClass("conduta-selecionada");
        $(".condutas-descricao").show();

        filterCondutas(id);
      }
    }
  });
}

function changeConduta() {
  jQuery(function () {
    condutaItems = Conduta.getItems();
    handleHint();
    handleEscolhaConduta();
    $("#conduta").data("loaded", false);
  });

  $("#ancestralidade select").on("change", () => handleCondutasBloqueadas());
  $("#idade input").on("focusout", () => handleCondutasDisponiveis());
  $("#idade input").on("focusout", () => resetCondutas());
  $("#idade input").on("touchend", () => handleCondutasDisponiveis());
  $("#idade input").on("touchend", () => resetCondutas());
  $("#idade .idade-buttons i").on("click", () => handleCondutasDisponiveis());
  $("#idade .idade-buttons i").on("click", () => resetCondutas());
}

export default changeConduta;