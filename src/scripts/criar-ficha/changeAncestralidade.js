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

export default function changeAncestralidade() {
  $('#ancestralidade select').on("change", (e) => {
    const tipo = $(e.currentTarget).val();

    if (!tipo.includes("Escolha")) {
      const ancestralidade = contentAncestralidade(tipo);
      appendItem(tipo, ".categorias-possiveis", ancestralidade.categoriasPossiveis);
      appendItem(tipo, ".virtudes", ancestralidade.virtudes);
      appendItem(tipo, ".vicios", ancestralidade.vicios);
      appendItem(tipo, ".tracos", ancestralidade.tracos);
      appendItem(tipo, ".condutas-bloqueadas", ancestralidade.condutasBloqueadas);

      $('#ancestralidade table').removeClass("d-none");
      $(".item-modal-link").on("click", (e) => mostrarDetalhes(e));

      //Atualiza categorias permitidas por ancestralidade
      // const categorias = contentAncestralidade("categorias");

      // let categoriasDisponiveis = removeDiacritics(categorias.toLowerCase()).split(", ");
      // let categoriasPossiveis = removeDiacritics(ancestralidade.categoriasPossiveis.toLowerCase()).split(", ");
      // categoriasPossiveis = $(categoriasDisponiveis).not(categoriasPossiveis).get();

      // $(`#categoria select option`).removeAttr("disabled");

      // $.each(categoriasPossiveis, (i, e) => {
      //   disableSelectOption("categoria", categoriasPossiveis[i]);
      // });

      // //Atualiza idade
      // const idade = contentIdade(tipo);
      // const idadeTitulo = idade.titulo;
      // const idadeExpectativa = idade.expectativa;
      // $('#idade .expectativa').text(idadeTitulo);
      // $('#idade .expectativa-valor').text(idadeExpectativa);

      // //Atualiza tabela de categoria
      // $('#categoria table').addClass("d-none");
      // $('#categoria select').prop('selectedIndex', 0);

      // //Atualiza passo
      // $("#ancestralidade .passo strong").addClass("concluido");
    } else {
      $('#ancestralidade table').addClass("d-none");
      // $('#idade').addClass("d-none");

      // $('#categoria select').attr("disabled", "disabled");
      // $('#categoria select').prop('selectedIndex', 0);
      // $('#categoria table').addClass("d-none");

      // $('#condutas').addClass("d-none");
      // $('#condutas-label').addClass("d-none");

      // //Atualiza passo
      // $("#ancestralidade .passo strong").removeClass("concluido");
    }

    validaPasso();
  });
}