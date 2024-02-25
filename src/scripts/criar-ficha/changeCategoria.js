import contentCategoria from "../../content/categoria.js";
import validaPasso from "./validaPasso.js";

export default function changeCategoria() {
  $('#categoria select').on("change", (e) => {
    const tipo = $(e.currentTarget).val();
    $('#categoria table').removeClass("d-none");

    if (!tipo.includes("Escolha")) {
      const categoria = contentCategoria(tipo);
      $('#categoria table .atributos').text(categoria.atributos);
      $('#categoria table .sortilegio').text(categoria.sortilegio);
      $('#categoria table .composicao').text(categoria.composicao);
      $('#categoria table .graduacao').text(categoria.graduacao);
      $('#categoria table .maestria').text(categoria.maestria);
    } else {
      $('#categoria table').addClass("d-none");
    }

    validaPasso();
  });
}