import loadJsonFiles from "../scripts/common/loadJsonFiles.js";
import getContentItem from "../scripts/common/getContentItem.js";

const files = ['atributo-aura.json', 'atributo-captacao.json', 'atributo-celeridade.json', 'atributo-eteressencia.json', 'atributo-idoneidade.json', 'atributo-pujanca.json', 'atributo-sapiencia.json', 'atributo-tenacidade.json'];
const atributos = loadJsonFiles("atributos", files);

function contentAtributo(atributo) {
  if (!atributo) return atributos;

  const atributoEscolhido = getContentItem(atributos, atributo);

  if (atributoEscolhido === undefined) {
    const errorMsg = `Erro: atributo "${atributo}" inválido.`;
    console.error(errorMsg);
    return [{ "atributo": "atributo_invalido" }];
  } else {
    return atributoEscolhido;
  }
}

export default contentAtributo;