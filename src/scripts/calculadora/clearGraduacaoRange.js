export default function clearGraduacaoRange(e) {
  const value = $(e.target).val();

  if (value === "1") {
    const graduacaoTable = $(e.target).parent().find("table.graduacoes").toggleClass("white-bg");
    if (graduacaoTable.hasClass("white-bg")) {
      $(e.target).parent().find("span").text("0");
    } else {
      $(e.target).parent().find("span").text("1");
    }

    const divGraduacao = $(e.target).parent().parent().find("div.graduacao");
    let graduacaoSubtotal = 0;

    $(divGraduacao).each((i, e) => {
      $($(e).find(".titulo > span")).each((j, f) => {
        graduacaoSubtotal += parseInt(f.textContent);
      })
      $(e).parent().find(".subtotal > span").text(graduacaoSubtotal);
    });

    let graduacaoTotal = 0;
    $("#graduacoes .titulo > span").each((i, e) => {
      graduacaoTotal += parseInt(e.textContent);
    })
    $("#graduacoes .total span").text(graduacaoTotal);
  }
}