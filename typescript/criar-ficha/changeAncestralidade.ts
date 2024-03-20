import Ancestralidade from "../content/classes/ancestralidade.js";
import Categoria from "../content/classes/categoria.js";
import arrayDiff from "../util/arrayDiff.js";
import removeDiacritics from "../util/removeDiacritics.js";
import validaPasso from "./validaFicha.js";

function appendItem(element: string, items: string[]) {
  $(`#ancestralidade table ${element}`).html("");

  $.each(items, (_index, item) => {
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

      //Atualiza preview da ficha
      if (element.includes("vicio")) {
        $(".preview-vicios-obrigatorios + ul").prepend(`<li class="preview-vicios-item">${item.replace("*", "")}</li>`);
      } else if (element.includes("virtude")) {
        $(".preview-virtudes-obrigatorias + ul").prepend(`<li class="preview-virtudes-item">${item.replace("*", "")}</li>`);
      }

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
  let categorias = Categoria.getItemsKeys();
  let categoriasPossiveis: Array<string> = [];
  let categoriasBloqueadas: Array<string> = [];

  const categoriasPossiveisElement = $("#ancestralidade .categorias-possiveis p");
  $.each(categoriasPossiveisElement, (i, item) => {
    let categoria = $(item).attr("data");
    if (categoria !== undefined) {
      categoriasPossiveis.push(categoria);
    }
  })
  categoriasBloqueadas = arrayDiff(categoriasPossiveis,categorias);

  //Reseta opcoes anteriores
  $("#categoria select option").removeAttr("disabled");
  $("#categoria select").prop("selectedIndex", 0);
  $("#categoria select").trigger("change");

  $.each($("#categoria select option"), (i, option) => {
    $.each(categoriasBloqueadas, (j, categoriaBloqueada) => {
      if ($(option).val() === categoriaBloqueada) {
        $(option).attr("disabled", "disabled");
      }
    });
  });
}

function changeAncestralidade() {
  $("#ancestralidade select").on("change", (e) => {
    const tipo = $(e.currentTarget).val()?.toString();

    if (typeof tipo !== "undefined" && !tipo?.toString().includes("Escolha")) {
      const ancestralidade = Ancestralidade.getItemById(tipo);

      //Atualiza preview da ficha
      if (typeof ancestralidade !== "undefined") {
        $(".preview").removeClass("d-none");
        $(".preview-warning").addClass("d-none");
        $(".preview-ancestralidade").text(ancestralidade.titulo);
        $(".preview-virtudes-obrigatorias + ul li:not(.preview-virtudes-empty)").remove();
        $(".preview-vicios-obrigatorios + ul li:not(.preview-vicios-empty)").remove();
  
        appendItem(".categorias-possiveis", ancestralidade.categoriasPossiveis);
        appendItem(".virtudes", ancestralidade.virtudes);
        appendItem(".vicios", ancestralidade.vicios);
        appendItem(".tracos", ancestralidade.tracos);
        appendItem(".condutas-bloqueadas", ancestralidade.condutasBloqueadas);
        $("#ancestralidade table").removeClass("d-none");
        // $(".item-modal-link").on("click", (e) => mostrarDetalhes(e));
      }
    } else {
      $("#ancestralidade table").addClass("d-none");

      //Atualiza preview da ficha
      $(".preview").addClass("d-none");
      $(".preview-warning").removeClass("d-none");
    }

    updateCategoriasPossiveis();
    validaPasso();
  });
}

export default changeAncestralidade;