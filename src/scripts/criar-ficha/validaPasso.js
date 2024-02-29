const PASSOS = ["nome", "ancestralidade", "categoria", "idade", "conduta"];

function updateQueryParam(value, key = "passo") {
  const url = new URL(window.location.href);
  url.searchParams.set(key, value);
  window.history.pushState({}, '', url.toString());
  $("#criar-ficha .avancar-passo i").off();
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
      const condutasDisponiveis = $(".vivenciaCondutas").text();
      $("#conduta .condutas").show();
      $(".condutas-swipe-hint").show().removeClass("d-none");
      $(".condutas-descricao").html("");

      if (condutasDisponiveis === "-") {
        $("#conduta .passo-descricao").html(`
          <p class='mb-0'>Sem condutas disponíves</p>
          <span class="text-warning">
            (Personagens infantes não recebem conduta)
          <span>
        `);
        $("#conduta .condutas").hide();
        $(".condutas-swipe-hint").hide();
        setTimeout(() => $("#conduta .slick-slider").click(), 100);
      } else if (condutasDisponiveis === "1") {
        $("#conduta .passo-descricao").html(`
          <p style="color: #61d461;">Escolha 1 conduta</p>
        `);
      } else if (condutasDisponiveis === "2") {
        $("#conduta .passo-descricao").html(`
          <p style="color: #61d461;">Escolha 2 condutas</p>
        `);
      } else if (condutasDisponiveis === "3") {
        $("#conduta .passo-descricao").html(`
          <p style="color: #61d461;">Escolha 3 condutas</p>
        `);
      }

      $("#conduta .bi-arrow-right-square-fill").hide();
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