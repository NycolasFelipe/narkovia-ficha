import loadJsonFiles from "../scripts/common/loadJsonFiles.js";
import getContentItem from "../scripts/common/getContentItem.js";

const files = ['conduta-abastado.json', 'conduta-alopata.json', 'conduta-alquimista.json', 'conduta-aristocrata.json', 'conduta-artesao.json', 'conduta-artifice.json', 'conduta-cacador-da-noite.json', 'conduta-cacador-de-cabecas.json', 'conduta-eremita.json', 'conduta-escritor.json', 'conduta-explorador.json', 'conduta-expurgador.json', 'conduta-extrator.json', 'conduta-falsificador.json', 'conduta-filha-da-primeira-luz.json', 'conduta-guarda.json', 'conduta-inspetor.json', 'conduta-inventor.json', 'conduta-ladrao.json', 'conduta-menestrel.json', 'conduta-mercenario.json', 'conduta-mestre-de-vislumbre.json', "conduta-mestre-mun'kai.json", 'conduta-miliciano.json', 'conduta-perfomancer.json', 'conduta-pinceiro.json', 'conduta-pirata.json', 'conduta-professor-estudioso.json', 'conduta-profeta.json', 'conduta-sacerdote.json', 'conduta-servidor.json', 'conduta-servo-de-honra.json', 'conduta-trapaceiro-golpista.json', 'conduta-tribal.json'];
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