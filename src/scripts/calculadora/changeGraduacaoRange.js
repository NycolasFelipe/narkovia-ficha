export default function changeGraduacaoRange(e) {
  const graduacaoVal = parseInt($(e.target).val());
  const graduacao = $(e.target).parent().find("span");

  $(graduacao).html((1 + graduacaoVal) * graduacaoVal / 2);

  const graduacaoTabela = $(e.target).parent().find("td");
  $(graduacaoTabela).css("background", "#fff");
  for (let i = 0; i < graduacaoVal; i++) {
    $(graduacaoTabela[i]).css("background", "#000");
    $(graduacaoTabela).parent().parent().parent().removeClass("white-bg");
  }

  $("#graduacoes > div").each((i, e) => {
    let graduacaoSubtotal = 0;
    $($(e).find(".titulo > span")).each((j, f) => {
      graduacaoSubtotal += parseInt(f.textContent);
    })
    $(e).find(".subtotal > span").text(graduacaoSubtotal);
  })

  let graduacaoTotal = 0;
  $("#graduacoes .titulo > span").each((i, e) => {
    graduacaoTotal += parseInt(e.textContent);
  });
  $("#graduacoes .total span").text(graduacaoTotal);
}