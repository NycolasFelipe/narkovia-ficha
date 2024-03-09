import contentConduta from "../../content/conduta.js";

let condutas = [];
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

function loadCondutas(container) {
  $.each(condutas, (index, conduta) => {
    const id = conduta.id;
    const tipo = conduta.tipo;
    const titulo = conduta.titulo;
    const descricao = conduta.descricao;
    const ganhos = conduta.ganhos;
    const condutaSelecionada = container === ".condutas-selecionadas";

    if (condutaSelecionada) {
      $(container).append(`
        <div 
          id="${id}" 
          data="${tipo}" 
          class="conduta-descricao conduta-descricao-selecionada d-none"
        >
          <div class="conduta-legenda">
            Conduta selecionada
          </div>
          <div class="descricao-titulo d-flex mb-2" style="position: relative;">
            <i class="bi bi-check-square-fill conduta-check" style="color: #61d461; cursor: pointer;"></i>
            <p class="conduta-titulo text-white ps-2" style="cursor: pointer; margin-bottom: 0; font-size: 1.1rem;">
              ${titulo}
            </p>
            <i class="bi bi-chevron-right"></i>
            <i class="bi bi-lock-fill" style="color: #61d461; position: absolute; right: 0; top: -25px;"></i>
          </div>
          <div class="descricao-corpo d-none">
            <p class="text-white" style="font-size: 0.9rem;">
              ${descricao}
            </p>
          </div>
        </div>
      `);
    } else {
      $(container).append(`
        <div 
          id="${id}" 
          data="${tipo}" 
          class="conduta-descricao"
        >
          <div class="conduta-legenda d-none">
            Conduta selecionada
          </div>
          <div class="descricao-titulo d-flex mb-2" style="position: relative;">
            <i class="bi bi-square conduta-check" style="color: #fff; cursor: pointer;"></i>
            <p class="conduta-titulo text-white ps-2" style="cursor: pointer; margin-bottom: 0; font-size: 1.1rem;">
              ${titulo}
            </p>
            <i class="bi bi-chevron-right"></i>
            <i class="bi bi-lock-fill d-none" style="color: #61d461; position: absolute; right: 0; top: -25px;"></i>
          </div>
          <div class="descricao-corpo d-none">
            <p class="text-white" style="font-size: 0.9rem;">
              ${descricao}
            </p>
          </div>
        </div>
      `);
    }

    $.each(ganhos, (index, ganho) => {
      $(`#conduta #${id}`).append(`
        <div class="descricao-ganhos d-flex d-none">
          <i class="bi bi-lightbulb" style="color: #fff;"></i>
          <p class="conduta-ganho text-white ps-2">${ganho}</div>
        </div>
      `);
    });
  });

  $(`${container} .descricao-titulo *:not(.conduta-check)`).off("click");
  $(`${container} .descricao-titulo *:not(.conduta-check)`).on("click", (e) => {
    const conduta = $(e.currentTarget).parent().parent();
    $(conduta).find(".descricao-corpo").toggleClass("d-none");
    $(conduta).find(".descricao-ganhos").toggleClass("d-none");
    $(conduta).find(".bi-chevron-right").toggleClass("bi-chevron-right-rotate");
  });
}

function tratamentoConduta(id) {
  switch (id) {
    case "filhas-da-primeira-luz":
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
  let condutasBloqueadas = $(".condutas-bloqueadas p");
  condutasBloqueadas = $.map(condutasBloqueadas, (e, i) => {
    return $(e).attr("data");
  });

  let condutas = $(".conduta-descricao:not(.conduta-descricao-selecionada)");

  $.each(condutas, (i, conduta) => {
    $.each(condutasBloqueadas, (j, condutaBloqueada) => {
      const condutaId = tratamentoConduta($(conduta).attr("id"));
      if (condutaId === condutaBloqueada) {
        $(conduta).addClass("conduta-descricao-bloqueada");
        $(conduta).prepend(`
          <div class="conduta-legenda">
            Conduta bloqueada
          </div>
        `);
        return false;
      }
    });
  });
}

function hideCondutaDuplicada() {
  const selecionadas = $(".conduta-descricao-selecionada:not(.d-none)");

  $.each(selecionadas, (index, selecionada) => {
    const id = $(selecionada).attr("id");
    const condutas = $(".conduta-descricao:not(.conduta-descricao-selecionada)");

    $.each(condutas, (j, conduta) => {
      if ($(conduta).attr("id") === id) {
        $(conduta).addClass("d-none");
      }
    });
  });
}

function filterCondutas(condutaSlideAtual) {
  $.each($("#conduta .conduta-descricao:not(.conduta-descricao-selecionada)"), (index, item) => {
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
  //Update conduta 
  $("#conduta .conduta-descricao:not(.conduta-descricao-selecionada) .conduta-check").on("click", (e) => {
    if (condutasSelecionadas < condutasDisponiveis) {
      condutasSelecionadas++;
      const conduta = $(e.currentTarget).parent().parent();
      const condutaId = $(conduta).attr("id");
      $("#conduta").find(`.condutas-descricao #${condutaId}`).addClass("d-none");
      $("#conduta").find(`.condutas-selecionadas #${condutaId}`).removeClass("d-none");
    }
  });
  //Update conduta selecionada
  $("#conduta .conduta-descricao-selecionada .conduta-check").on("click", (e) => {
    condutasSelecionadas--;
    const conduta = $(e.currentTarget).parent().parent();
    const condutaId = $(conduta).attr("id");
    $("#conduta").find(`.condutas-descricao #${condutaId}`).removeClass("d-none");
    $("#conduta").find(`.condutas-selecionadas #${condutaId}`).addClass("d-none");

    const condutaSlideAtual = $(".conduta-selecionada").attr("id");
    filterCondutas(condutaSlideAtual);
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
    setTimeout(() => $("#conduta .slick-slider").click(), 100);
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

  $(".voltar-passo").on("mouseup", () => {
    $(".condutas-descricao").hide();
  });
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
    if ($(e.currentTarget).attr("id") !== condutaSlideAtual) {
      $("#conduta .conduta").removeClass("conduta-selecionada");
      $(e.currentTarget).toggleClass("conduta-selecionada");
      $(".condutas-descricao").show();

      filterCondutas($(e.currentTarget).attr("id"));
    }
  });
}

function changeConduta() {
  $(document).ready(() => {
    condutas = contentConduta();
    handleHint();
    handleEscolhaConduta();
  });
  $("#ancestralidade select").on("change", () => handleCondutasBloqueadas());
  $("#idade input").on("focusout", () => handleCondutasDisponiveis());
  $("#idade input").on("focusout", () => resetCondutas());
  $("#idade .idade-buttons i").on("click", () => handleCondutasDisponiveis());
  $("#idade .idade-buttons i").on("click", () => resetCondutas());
}

export default changeConduta;