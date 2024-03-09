import loadJsonFiles from "../scripts/common/loadJsonFiles.js";
import getContentItem from "../scripts/common/getContentItem.js";

const files = ['conduta-abastado.json', 'conduta-alopata.json', 'conduta-alquimista.json', 'conduta-aristocrata.json', 'conduta-artesoes.json', 'conduta-artifice.json', 'conduta-cacador-da-noite.json', 'conduta-cacador-de-cabecas.json', 'conduta-eremita.json', 'conduta-escritor.json', 'conduta-explorador.json', 'conduta-expurgador.json', 'conduta-extratores.json', 'conduta-falsificador.json', 'conduta-filhas-da-primeira-luz.json', 'conduta-guardas.json', 'conduta-inspetor.json', 'conduta-inventor.json', 'conduta-ladrao.json', 'conduta-menestrel.json', 'conduta-mercenarios.json', 'conduta-mestre-de-vislumbre.json', "conduta-mestre-mun'kai.json", 'conduta-milicianos.json', 'conduta-perfomancer.json', 'conduta-pinceiros.json', 'conduta-pirata.json', 'conduta-professor-estudioso.json', 'conduta-profeta.json', 'conduta-sacerdote.json', 'conduta-servidores.json', 'conduta-servo-de-honra.json', 'conduta-trapaceiro-golpista.json', 'conduta-tribal.json'];
const condutas = loadJsonFiles("condutas", files);

function contentConduta(conduta) {
	if (!conduta) return condutas;

	const condutaEscolhida = getContentItem(condutas, conduta);

	if (condutaEscolhida === undefined) {
		const errorMsg = `Erro: conduta "${conduta}" inválida.`;
		console.error(errorMsg);
		return [{ "conduta": "conduta_invalida" }];
	} else {
		return condutaEscolhida;
	}
}

export default contentConduta;