import getContentItem from "../scripts/common/getContentItem.js";
import loadJsonFiles from "../scripts/common/loadJsonFiles.js";

const files = ['graduacao-agudeza.json', 'graduacao-combate.json', 'graduacao-erudicao.json', 'graduacao-influencia.json', 'graduacao-lideranca.json', 'graduacao-sagacidade.json', 'graduacao-tecnica.json'];
const graduacoes = loadJsonFiles("graduacoes", files);

function contentGraduacao(graduacao) {
  if (!graduacao) return graduacoes;

  const graduacaoEscolhida = getContentItem(graduacoes, graduacao);

  if (graduacaoEscolhida === undefined) {
    const errorMsg = `Erro: graduacao "${graduacao}" inválida.`;
    console.error(errorMsg);
    return [{ "graduacao": "graduacao_invalida" }];
  } else {
    return graduacaoEscolhida;
  }
}

export default contentGraduacao;