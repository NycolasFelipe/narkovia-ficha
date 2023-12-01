import contentCategoria from "../content/categoria.js";

export default function changeCategoria() {
  const tipo = $('#categoria').val();
  $('.ficha-categoria table').removeClass("d-none");

  if (tipo !== "Escolha sua categoria") {
    const categoria = contentCategoria(tipo);
    $('.ficha-categoria table .atributos').text(categoria.atributos);
    $('.ficha-categoria table .sortilegio').text(categoria.sortilegio);
    $('.ficha-categoria table .composicao').text(categoria.composicao);
    $('.ficha-categoria table .graduacao').text(categoria.graduacao);
    $('.ficha-categoria table .maestria').text(categoria.maestria);
  } else {
    $('.ficha-categoria table').addClass("d-none");
  }
}