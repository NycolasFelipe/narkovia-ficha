export default function localStorageClear() {
  //Clear Atributos
  $("#atributos input").val(0).change();

  //Clear Graduacoes
  $(".graduacao input").each((i, e) => {
    const graduacaoTabela = $(e).parent().find("td");
    $(`#${e.id}`).val(0);
    $(`#${e.id}`).parent().find(".titulo > span").text("0");
    $(`#${e.id}`).parent().parent().find(".subtotal > span").text("0");
    $(`#graduacoes .total-graduacoes span`).text("0");
    $(graduacaoTabela).css("background", "#fff");
    $(graduacaoTabela).parent().parent().parent().addClass("white-bg");
  });
}