import contentAncestralidade from "../content/ancestralidade.js";
import contentIdade from "../content/idade.js";
import disableSelectOption from "./disableSelectOption.js";
import removeDiacritics from "./removeDiacritics.js";

export default function changeAncestralidade() {
  const tipo = $('#ancestralidade').val();
  $('.ficha-ancestralidade table').removeClass("d-none");
  $('#categoria option').removeAttr("disabled");
  $('#categoria').removeAttr("disabled");
  $('.ficha-idade').removeClass("d-none");

  if (tipo !== "Escolha sua ancestralidade") {
    const ancestralidade = contentAncestralidade(tipo);
    $('.ficha-ancestralidade table .categorias-possiveis').text(ancestralidade.categoriasPossiveis);
    $('.ficha-ancestralidade table .virtudes').text(ancestralidade.virtudes);
    $('.ficha-ancestralidade table .vicios').text(ancestralidade.vicios);
    $('.ficha-ancestralidade table .tracos').text(ancestralidade.tracos);
    $('.ficha-ancestralidade table .condutas-bloqueadas').text(ancestralidade.condutasBloqueadas);

    //Atualiza categorias permitidas por ancestralidade
    const categorias = contentAncestralidade("categorias");
    
    let categoriasDisponiveis = removeDiacritics(categorias.toLowerCase()).split(", ");
    let categoriasPossiveis = removeDiacritics(ancestralidade.categoriasPossiveis.toLowerCase()).split(", ");
    categoriasPossiveis = $(categoriasDisponiveis).not(categoriasPossiveis).get();

    $.each(categoriasPossiveis, (i, e) => {
      disableSelectOption("categoria", categoriasPossiveis[i]);
    });

    //Atualiza idade
    const idade = contentIdade(tipo);
    const idadeTitulo = idade.titulo;
    const idadeExpectativa = idade.expectativa;
    $('.ficha-idade .expectativa').text(idadeTitulo);
    $('.ficha-idade .expectativa-valor').text(idadeExpectativa);

    //Atualiza tabela de categoria
    $('.ficha-categoria table').addClass("d-none");
    $('#categoria').prop('selectedIndex', 0);
  } else {
    $('.ficha-ancestralidade table').addClass("d-none");
    $('.ficha-idade').addClass("d-none");
  }
}