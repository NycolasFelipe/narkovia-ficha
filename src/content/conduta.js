import * as files from "./condutas" assert { type: 'json' };

const condutas = [];
const pathname = window.location.origin;
const path = pathname.includes("github") ? pathname + "/narkovia-ficha" : pathname;

$.each(files.default, (index, conduta) => {
  console.log(`${path}/src/content/condutas/${conduta}`);
  fetch(`${path}/src/content/condutas/${conduta}`)
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