import validaPasso from "./validaPasso.js";

function setUrl(passo) {
  const url = new URL(window.location.href);
  url.searchParams.set("passo", passo);
  window.history.pushState({}, '', url.toString());
  $(window).scrollTop(250);
  validaPasso();
}

function ___debug() {
  /*
  $("#ancestralidade select option:eq(1)").prop("selected", "selected");
  setTimeout(() => {
    $("#ancestralidade select").change();
    setUrl("categoria");
  }, 100);

  setTimeout(() => {
    $("#categoria select option:eq(1)").prop("selected", "selected");
  }, 200);
  setTimeout(() => {
    $("#categoria select").change();
    setUrl("idade");
  }, 300);

  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      $("#idade .idade-mais").click();
      $("#idade .idade-mais").click();
      $("#idade .idade-mais").click();
    }
  }, 400);
  setTimeout(() => {
    setUrl("conduta");
  }, 500);

  setTimeout(() => {
    setUrl("tamanho");
    $("#tamanho select option:eq(1)").prop("selected", "selected");
    $("#tamanho select").change();
  }, 600);

  setTimeout(() => {
    setUrl("atributo");
    $("#tamanho .bi-arrow-right-square-fill").mouseup();
  }, 700);
  */
}

export default ___debug;