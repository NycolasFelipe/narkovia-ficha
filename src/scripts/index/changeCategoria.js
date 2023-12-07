import contentCategoria from "../../content/categoria.js";

export default function changeCategoria() {
  const tipo = $('#categoria select').val();
  $('#categoria table').removeClass("d-none");

  if (!tipo.includes("Escolha")) {
    const categoria = contentCategoria(tipo);
    $('#categoria table .atributos').text(categoria.atributos);
    $('#categoria table .sortilegio').text(categoria.sortilegio);
    $('#categoria table .composicao').text(categoria.composicao);
    $('#categoria table .graduacao').text(categoria.graduacao);
    $('#categoria table .maestria').text(categoria.maestria);

    //Atualiza passo
    $("#categoria .passo strong").addClass("concluido");
  } else {
    $('#categoria table').addClass("d-none");

    //Atualiza passo
    $("#categoria .passo strong").removeClass("concluido");
  }
}