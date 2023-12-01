import contentAncestralidade from "../content/ancestralidade.js";
import contentIdade from "../content/idade.js";
import disableSelectOption from "./disableSelectOption.js";

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

    const idade = contentIdade(tipo);

    //Atualiza categoria
    if (tipo.includes("humano")) {
      // Categorias proibidas para humanos
      disableSelectOption("categoria", "sobrehumano");
      
    } else if (tipo.includes("munkaiSeltino")) {
      // Categorias proibidas para seltinos
      disableSelectOption("categoria", "ordinario");
      disableSelectOption("categoria", "insolito");
      disableSelectOption("categoria", "extraordinario");
  
    } else if (tipo.includes("munkaiDunfrine")) {
      // Categorias proibidas para dunfrines
      disableSelectOption("categoria", "sobrehumano");
  
    } else if (tipo.includes("munkaiTitere")) {
      // Categorias proibidas para titeres
      disableSelectOption("categoria", "ordinario");
      disableSelectOption("categoria", "insolito");
      disableSelectOption("categoria", "extraordinario");
  
    } else if (tipo.includes("munkaiCisco")) {
      // Categorias proibidas para ciscos
      disableSelectOption("categoria", "ordinario");
  
    } else if (tipo.includes("espuria")) {
      // Categorias proibidas para espurias
      disableSelectOption("categoria", "ordinario");
      disableSelectOption("categoria", "insolito");
      disableSelectOption("categoria", "extraordinario");
    }

    //Atualiza idade
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