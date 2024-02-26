import contentAncestralidade from "../../content/ancestralidade.js";
import removeDiacritics from "../common/removeDiacritics.js";
import mostrarDetalhes from "./mostrarDetalhes.js";
import validaPasso from "./validaPasso.js";

function appendItem(tipo, element, items) {
  $(`#ancestralidade table ${element}`).html("");
  $.each(items, (index, item) => {
    let itemId = removeDiacritics(item).toLowerCase().replaceAll(" – ", " ").replaceAll(" ", "-").replace("*", "");

    if (item.includes("*")) {
      let aviso;
      if (element.includes("virtude")) {
        aviso = "Virtude obrigatória";
      } else if (element.includes("vicio")) {
        aviso = "Vício obrigatório";
      }

      $(`#ancestralidade table ${element}`).append(`
      <p class="item-modal-link" data=${itemId} style="margin-bottom: 10px; border-left: 2px solid lightgrey; padding-left: 5px; font-weight: 500;">
        ${item}
        <span class="d-block w-100" style="font-weight: 500; font-size: 0.8rem; color: red;">
          ${aviso}
        </span>
      </p>
    `);
    } else {
      $(`#ancestralidade table ${element}`).append(`
        <p class="item-modal-link" data=${itemId}  style="margin-bottom: 10px; border-left: 2px solid lightgrey; padding-left: 5px;">
          ${item}
        </p>
      `);
    }
  });
}

function updateCategoriasPossiveis() {
  let categorias = contentAncestralidade("categoriasKeys");
  let categoriasPossiveis = [];
  let categoriasBloqueadas;

  const categoriasPossiveisElement = $("#ancestralidade .categorias-possiveis p");
  $.each(categoriasPossiveisElement, (i, item) => {
    let categoria = $(item).attr("data");
    categoriasPossiveis.push(categoria);
  })
  categoriasBloqueadas = $(categorias).not(categoriasPossiveis).get();

  //Reseta opcoes anteriores
  $("#categoria select option").removeAttr("disabled");
  $("#categoria select").prop("selectedIndex", 0);
  $("#categoria select").change();

  $.each($("#categoria select option"), (i, option) => {
    $.each(categoriasBloqueadas, (j, categoriaBloqueada) => {
      if ($(option).val() === categoriaBloqueada) {
        $(option).attr("disabled", "disabled");
      }
    });
  });
}

export default function changeAncestralidade() {
  $("#ancestralidade select").on("change", (e) => {
    const tipo = $(e.currentTarget).val();

    if (!tipo.includes("Escolha")) {
      const ancestralidade = contentAncestralidade(tipo);
      appendItem(tipo, ".categorias-possiveis", ancestralidade.categoriasPossiveis);
      appendItem(tipo, ".virtudes", ancestralidade.virtudes);
      appendItem(tipo, ".vicios", ancestralidade.vicios);
      appendItem(tipo, ".tracos", ancestralidade.tracos);
      appendItem(tipo, ".condutas-bloqueadas", ancestralidade.condutasBloqueadas);

      $("#ancestralidade table").removeClass("d-none");
      $(".item-modal-link").on("click", (e) => mostrarDetalhes(e));
    } else {
      $("#ancestralidade table").addClass("d-none");
    }

    updateCategoriasPossiveis();
    validaPasso();
  });
}