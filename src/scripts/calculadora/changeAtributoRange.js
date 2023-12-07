export default function changeAtributoRange(e) {
  const atributoVal = $(e.target).val();
  const atributo = $(e.target).parent().find("span");
  $(atributo).html(2 ** atributoVal - 2);

  const atributoTabela = $(e.target).parent().find("td");
  $(atributoTabela).css("background", "#fff");
  for (let i = 0; i < atributoVal; i++) {
    $(atributoTabela[i]).css("background", "#000");
  }

  let atributoTotal = 0;
  $("#atributos .titulo > span").each((i, e) => {
    atributoTotal += parseInt(e.textContent);
  })
  $("#atributos .total span").text(atributoTotal);
}