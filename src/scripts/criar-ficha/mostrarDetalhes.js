import contentDetalhes from "../../content/detalhes.js";

function mostrarDetalhes(e) {
  const item = $(e.currentTarget).attr("data");
  const content = contentDetalhes(item);

  $("#detalhesModalButton").click();
  $("#detalhesModal .modal-title").text(content.titulo);
  $("#detalhesModal .modal-description p").text(content.descricao);
  $("#detalhesModal .modal-requirements p").text(content.requisitos);
}

export default mostrarDetalhes;