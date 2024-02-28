import * as files from "./condutas" assert { type: 'json' };

const condutas = [];
$.each(files.default, (index, conduta) => {
  fetch(`${window.location.origin}/src/content/condutas/${conduta}`)
    .then((response) => response.json())
    .then((json) => condutas.push(json));
});

function contentConduta(conduta) {
  if (conduta === "condutas") {
    return condutas;
  }

  const condutaEscolhida = condutas[conduta];
  
  if (condutaEscolhida === undefined) {
    const errorMsg = `Erro: conduta "${conduta}" inválida.`;
    console.error(errorMsg);
    return [{ "conduta": "conduta_invalida" }];
  } else {
    return condutaEscolhida;
  }
}

export default contentConduta;