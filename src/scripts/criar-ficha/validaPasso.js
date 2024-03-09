const PASSOS = ["ancestralidade", "categoria", "idade", "conduta"];

function updateQueryParam(value, key = "passo") {
  const url = new URL(window.location.href);
  url.searchParams.set(key, value);
  window.history.pushState({}, '', url.toString());
  $("#criar-ficha .avancar-passo i").off("click");
  $(window).scrollTop(250);
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
    $(passoButton).off("click");
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
    case "ancestralidade":
      const ancestralidade = !$("#ancestralidade select").val().includes("Escolha");
      allowPasso(ancestralidade, proximoPassoButton);
      break;

    case "categoria":
      const categoria = !$("#categoria select option:selected").text().includes("Escolha");
      allowPasso(categoria, proximoPassoButton);
      break;

    case "idade":
      //Atualiza informação da ancestralidade escolhida
      const idade = parseInt($('#idade input').val()) > 0 && !$('#idade input').is(":focus");
      const ancestralidadeEscolhida = $("#ancestralidade option:selected").text();
      $("#idade .passo-descricao span").text(ancestralidadeEscolhida);
      allowPasso(idade, proximoPassoButton);
      break;

    case "conduta":
      $("#conduta .condutas").find(".slick-prev").click();
      $("#conduta .bi-arrow-right-square-fill").hide();

      $(".loading").show();
      $(".condutas").css("filter", "opacity(0.0)");
      setTimeout(() => {
        $(".loading").hide();
        $(".condutas").css("filter", "opacity(1.0)");
      }, 500);
      break;

    default:
      break;
  }

  if (passoAtual === proximoPasso) {
    $(proximoPassoButton).removeClass("avancar-passo-ok");
    $(proximoPassoButton).off("click");
  }
}

export default validaPasso;