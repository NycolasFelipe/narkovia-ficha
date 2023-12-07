import contentAncestralidade from "../../content/ancestralidade.js";
import contentIdade from "../../content/idade.js";
import disableSelectOption from "../common/disableSelectOption.js";
import removeDiacritics from "../common/removeDiacritics.js";

export default function changeAncestralidade() {
  const tipo = $('#ancestralidade select').val();

  if (tipo !== "Escolha sua ancestralidade") {
    const ancestralidade = contentAncestralidade(tipo);
    $('#ancestralidade table .categorias-possiveis').text(ancestralidade.categoriasPossiveis);
    $('#ancestralidade table .virtudes').text(ancestralidade.virtudes);
    $('#ancestralidade table .vicios').text(ancestralidade.vicios);
    $('#ancestralidade table .tracos').text(ancestralidade.tracos);
    $('#ancestralidade table .condutas-bloqueadas').text(ancestralidade.condutasBloqueadas);

    $('#ancestralidade table').removeClass("d-none");
    $('#categoria select').removeAttr("disabled");
    $('#categoria table').removeClass("d-none");
    $('#idade').removeClass("d-none");

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
    $('#idade .expectativa').text(idadeTitulo);
    $('#idade .expectativa-valor').text(idadeExpectativa);

    //Atualiza tabela de categoria
    $('#categoria table').addClass("d-none");
    $('#categoria table').prop('selectedIndex', 0);

    //Atualiza passo
    $("#ancestralidade .passo strong").addClass("concluido");
  } else {
    $('#ancestralidade table').addClass("d-none");
    $('#idade').addClass("d-none");
    $('#categoria').attr("disabled", "disabled");
    $('#categoria').prop('selectedIndex', 0);
    $('#categoria table').addClass("d-none");

    //Atualiza passo
    $("#ancestralidade .passo strong").removeClass("concluido");
  }
}