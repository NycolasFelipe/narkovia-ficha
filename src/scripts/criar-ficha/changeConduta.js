import contentConduta from "../../content/conduta.js";

let condutas = []

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

function handleEscolhaConduta() {
  $("#conduta .conduta").on("click", (e) => {
    $("#conduta .condutas-descricao").html("");
    $("#conduta .conduta").removeClass("conduta-selecionada");
    $(e.currentTarget).toggleClass("conduta-selecionada");

    $.each(condutas, (index, conduta) => {
      if ($(e.currentTarget).attr("data") === conduta.tipo) {
        const id = conduta.id;
        const titulo = conduta.titulo;
        const descricao = conduta.descricao;
        const ganhos = conduta.ganhos;

        $(".condutas-descricao").append(`
          <div id="${id}" class="conduta-descricao my-5 text-center">
            <p class="conduta-titulo text-white">${titulo}</p>
            <p class="conduta-descricao text-white">${descricao}</p>
          </div>
        `);

        $.each(ganhos, (index, ganho) => {
          $(`#conduta #${id}`).append(`
            <p class="conduta-ganho text-white">${ganho}</div>
          `);
        });
      }
    });
  });
}

function changeConduta() {
  $(document).ready(() => {
    condutas = contentConduta("condutas");

    handleHint();
    handleEscolhaConduta();
  });
}

export default changeConduta;