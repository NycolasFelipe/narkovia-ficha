const files = [
	"conduta-abastado.json",
	"conduta-alopata.json",
	"conduta-alquimista.json",
	"conduta-aristocrata.json",
	"conduta-cacador-da-noite.json",
	"conduta-cacador-de-cabecas.json",
	"conduta-eremita.json",
	"conduta-explorador.json",
	"conduta-expurgador.json",
	"conduta-falsificador.json",
	"conduta-filhas-da-primeira-luz.json",
	"conduta-inspetor.json",
	"conduta-inventor.json",
	"conduta-ladrao.json",
	"conduta-mestre-de-vislumbre.json",
	"conduta-mestre-mun'kai.json",
	"conduta-pirata.json",
	"conduta-professor-estudioso.json",
	"conduta-profeta.json",
	"conduta-sacerdote.json",
	"conduta-servo-de-honra.json",
	"conduta-trapaceiro-golpista.json",
	"conduta-tribal.json"
];

const condutas = [];
const pathname = window.location.origin;
const path = pathname.includes("github") ? pathname + "/narkovia-ficha" : pathname;

$.each(files, (index, conduta) => {
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