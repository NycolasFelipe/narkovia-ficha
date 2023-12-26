import contentAncestralidade from "../../content/ancestralidade.js";
import contentIdade from "../../content/idade.js";
import disableSelectOption from "../common/disableSelectOption.js";
import removeDiacritics from "../common/removeDiacritics.js";

export default function changeAncestralidade() {
  const tipo = $('#ancestralidade select').val();

  if (!tipo.includes("Escolha")) {
    const ancestralidade = contentAncestralidade(tipo);
    $('#ancestralidade table .categorias-possiveis').text(ancestralidade.categoriasPossiveis);
    $('#ancestralidade table .virtudes').text(ancestralidade.virtudes);
    $('#ancestralidade table .vicios').text(ancestralidade.vicios);
    $('#ancestralidade table .tracos').text(ancestralidade.tracos);
    $('#ancestralidade table .condutas-bloqueadas').text(ancestralidade.condutasBloqueadas);

    $('#ancestralidade table').removeClass("d-none");
    $('#categoria select').removeAttr("disabled");
    $('#categoria table').removeClass("d-none");
    $('#jornada #jornadas').removeAttr("disabled");
    $('#jornada select').prop('selectedIndex', 0);
    $('#idade').removeClass("d-none");

    //Atualiza categorias permitidas por ancestralidade
    const categorias = contentAncestralidade("categorias");
    
    let categoriasDisponiveis = removeDiacritics(categorias.toLowerCase()).split(", ");
    let categoriasPossiveis = removeDiacritics(ancestralidade.categoriasPossiveis.toLowerCase()).split(", ");
    categoriasPossiveis = $(categoriasDisponiveis).not(categoriasPossiveis).get();

    $(`#categoria select option`).removeAttr("disabled");

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
    $('#categoria select').prop('selectedIndex', 0);

    //Atualiza passo
    $("#ancestralidade .passo strong").addClass("concluido");
  } else {
    $('#ancestralidade table').addClass("d-none");
    $('#idade').addClass("d-none");
    
    $('#categoria select').attr("disabled", "disabled");
    $('#categoria select').prop('selectedIndex', 0);
    $('#categoria table').addClass("d-none");

    $('#jornada #jornadas').attr("disabled", "disabled");
    $('#jornada select').prop('selectedIndex', 0);
    $('#jornada table').addClass("d-none");
    
    $('#condutas').addClass("d-none");
    $('#condutas-label').addClass("d-none");

    //Atualiza passo
    $("#ancestralidade .passo strong").removeClass("concluido");
    $("#jornada .passo strong").removeClass("concluido");
  }
}