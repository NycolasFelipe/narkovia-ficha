const PASSOS = ["nome", "ancestralidade", "categoria"];

function updateQueryParam(value, key = "passo") {
  const url = new URL(window.location.href);
  url.searchParams.set(key, value);
  window.history.pushState({}, '', url.toString());
  $("#criar-ficha .avancar-passo i").off();
  validaPasso();
};

function exibirPassoAtual(passoAtual) {
  $.each(PASSOS, (index, passo) => {
    $(`#${passoAtual}`).removeClass("d-none");
    if (passo !== passoAtual) {
      $(`#${passo}`).addClass("d-none");
    }
  });
}

function getPasso(passoAtual, tipo) {
  let proximoPasso;
  let ultimoPasso;
  $.each(PASSOS, (index, item) => {
    if (item === passoAtual) {
      if (index < 1) {
        ultimoPasso = PASSOS[0];
      } else {
        ultimoPasso = PASSOS[index - 1];
      }
      if (index >= PASSOS.length - 1) {
        proximoPasso = PASSOS[PASSOS.length - 1];
      } else {
        proximoPasso = PASSOS[index + 1];
      }
    }
  });
  if (tipo === "proximo") {
    return proximoPasso;
  } else if (tipo === "ultimo") {
    return ultimoPasso;
  }
}

function getPassoButton(passoAtual, tipo) {
  let passoButton;
  if (tipo === "proximo") {
    passoButton = `#${passoAtual} .bi-arrow-right-square-fill`;
  } else if (tipo === "ultimo") {
    passoButton = `#${passoAtual} .bi-arrow-left-square-fill`;
  }
  return passoButton;
}

function checkPasso(passo, passoButton) {
  $(passoButton).on("click", () => {
    updateQueryParam(passo);
  });
}

function allowPasso(allowed, passoButton) {
  if (allowed) {
    $(passoButton).addClass("avancar-passo-ok");
  } else {
    $(passoButton).removeClass("avancar-passo-ok");
    $(passoButton).off();
  }
}

function validaPasso() {
  let passoAtual = window.location.search;
  passoAtual = passoAtual.split("=")[1];

  let proximoPasso = getPasso(passoAtual, "proximo");
  let ultimoPasso = getPasso(passoAtual, "ultimo");
  let proximoPassoButton = getPassoButton(passoAtual, "proximo");
  let ultimoPassoButton = getPassoButton(passoAtual, "ultimo");

  exibirPassoAtual(passoAtual);
  checkPasso(proximoPasso, proximoPassoButton);
  checkPasso(ultimoPasso, ultimoPassoButton);

  switch (passoAtual) {
    case "nome":
      const nome = $("#nomePersonagem").val().length > 0;
      allowPasso(nome, proximoPassoButton);
      break;

    case "ancestralidade":
      const ancestralidade = !$("#ancestralidade select").val().includes("Escolha");
      allowPasso(ancestralidade, proximoPassoButton);
      break;

    case "categoria":
      const categoria = !$("#categoria select").val().includes("Escolha");
      allowPasso(categoria, proximoPassoButton);
      break;

    default:
      break;
  }

  if (passoAtual === proximoPasso) {
    $(proximoPassoButton).removeClass("avancar-passo-ok");
    $(proximoPassoButton).off();
  }
}

export default validaPasso;