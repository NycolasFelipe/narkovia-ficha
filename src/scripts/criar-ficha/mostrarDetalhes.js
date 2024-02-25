import contentDetalhes from "../../content/detalhes.js";

function mostrarDetalhes(e) {
  const item = $(e.currentTarget).attr("data");
  try {
    const content = contentDetalhes(item);

    $("#detalhesModalButton").click();
    $("#detalhesModal .modal-title").text(content.titulo);
    $("#detalhesModal .modal-description p").text(content.descricao);
    $("#detalhesModal .modal-requirements p").text(content.requisitos);

    $("#detalhesModal").on("click", () => {
      setTimeout(() => {
        $("#detalhesModal .modal-title").text("Título");
        $("#detalhesModal .modal-description p").text("");
        $("#detalhesModal .modal-requirements p").text("");
      }, 300);
    });
  } catch (error) {
    console.log(`Detalhe indisponível para o item: <${item}>`);
  }
}

export default mostrarDetalhes;