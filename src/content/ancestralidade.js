import loadJsonFiles from "../scripts/common/loadJsonFiles.js";
import getContentItem from "../scripts/common/getContentItem.js";

const files = ['ancestralidade-automato.json', 'ancestralidade-comensal.json', 'ancestralidade-espuria.json', 'ancestralidade-gandulo.json', 'ancestralidade-humano-miraniano.json', 'ancestralidade-humano-narkoviano.json', 'ancestralidade-meandro.json', 'ancestralidade-nulo.json', 'ancestralidade-perenal.json', 'ancestralidade-progenito-cisco.json', 'ancestralidade-progenito-dunfrine.json', 'ancestralidade-progenito-seltino.json', 'ancestralidade-progenito-titere.json', 'ancestralidade-sanguefrio.json'];
const ancestralidades = loadJsonFiles("ancestralidades", files);

function contentAncestralidade(ancestralidade) {
  if (!ancestralidade) return ancestralidades;
  
  if (ancestralidade === "keys") {
    const keys = [];
    $.each(ancestralidades, (index, item) => {
      keys.push(item.id);
    });
    return keys;
  }

  if (ancestralidade.includes("espuria")) {
    ancestralidade = "espuria";
  }

  const ancestralidadeEscolhida = getContentItem(ancestralidades, ancestralidade);

  if (ancestralidadeEscolhida === undefined) {
    const errorMsg = `Erro: ancestralidade "${ancestralidade}" inválida.`;
    console.error(errorMsg);
    return [{ "ancestralidade": "ancestralidade_invalida" }];
  } else {
    return ancestralidadeEscolhida;
  }
}

export default contentAncestralidade;