import changeGraduacaoRange from "./changeGraduacaoRange.js";

export default function localStorageLoad() {
  //Load Atributos
  const atributos = JSON.parse(localStorage.getItem("atributos"));
  $.each(atributos, (key, value) => $(`#${key}`).val(value));
  $("#atributos input").change();

  //Load Graduacoes
  const graduacoes = JSON.parse(localStorage.getItem("graduacoes"));

  $.each(graduacoes, (key, value) => {
    const valueRange = value.valueRange;
    const valueSubtotal = value.valueSubtotal;
    $(`#graduacoes #${key}`).val(valueRange);
    $(`#graduacoes #${key}`).parent().find(".titulo > span").text(valueSubtotal);
  })

  changeGraduacaoRange($(".graduacao input"));

  $(".graduacao input").each((i, e) => {
    const graduacaoVal = parseInt($(e).val());
    const graduacaoTabela = $(e).parent().find("td");

    $(graduacaoTabela).css("background", "#fff");
    for (let i = 0; i < graduacaoVal; i++) {
      $(graduacaoTabela[i]).css("background", "#000");
      if ($(`#${e.id}`).parent().find(".titulo > span").text() === "0") {
        $(graduacaoTabela).parent().parent().parent().addClass("white-bg");
      } else {
        $(graduacaoTabela).parent().parent().parent().removeClass("white-bg");
      }
    }
  });
}