function updateQueryParam(key, value) {
  const url = new URL(window.location.href);
  url.searchParams.set(key, value);
  window.history.pushState({}, '', url.toString());
};

function permitirAvanco(passo) {
  $(passo).addClass("avancar-passo-ok");
}

function negarAvanco(passo) {
  $(passo).removeClass("avancar-passo-ok");
}

function exibirPassoAtual(passos, passoAtual) {
  $.each(passos, (index, passo) => {
    $(`#${passoAtual}`).removeClass("d-none");
    if (passo !== passoAtual) {
      $(`#${passo}`).addClass("d-none");
    }
  });
}

function mudarPasso(passo, passoValor) {
  if ($(passo).hasClass("avancar-passo-ok") || $(passo).hasClass("voltar-passo")) {
    updateQueryParam("passo", passoValor);
    validaPasso();
  }
}

function checarPasso(passo, passoValor) {
  $(passo).on("click", () => mudarPasso(passo, passoValor));
}

function validaPasso() {
  const passos = ["nome", "ancestralidade"];
  let passoAtual = window.location.search;
  passoAtual = passoAtual.split("=")[1];
  let proximoPasso;
  let proximoPassoValor;
  let ultimoPasso;
  let ultimoPassoValor;

  exibirPassoAtual(passos, passoAtual);

  switch (passoAtual) {
    case "nome":
      const nome = $("#nomePersonagem").val().length > 0;
      proximoPasso = "#nome .bi-arrow-right-square-fill";
      proximoPassoValor = "ancestralidade";

      if (nome) permitirAvanco(proximoPasso);
      else negarAvanco(proximoPasso);

      checarPasso(proximoPasso, proximoPassoValor);
      break;

    case "ancestralidade":
      const ancestralidade = !$("#ancestralidade select").val().includes("Escolha");
      proximoPasso = "#ancestralidade .bi-arrow-right-square-fill";
      ultimoPasso = "#ancestralidade .bi-arrow-left-square-fill";
      proximoPassoValor = "categoria"
      ultimoPassoValor = "nome";

      if (ancestralidade) permitirAvanco(proximoPasso, proximoPassoValor);
      else negarAvanco(proximoPasso);

      checarPasso(proximoPasso, proximoPassoValor);
      checarPasso(ultimoPasso, ultimoPassoValor);
      break;

    default:
      break;
  }
}

export default validaPasso;