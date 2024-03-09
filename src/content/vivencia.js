import getContentItem from "../scripts/common/getContentItem.js";
import loadJsonFiles from "../scripts/common/loadJsonFiles.js";

const files = ['vivencia-infante.json', 'vivencia-jovem.json', 'vivencia-maduro.json', 'vivencia-senior.json'];
const vivencias = loadJsonFiles("vivencias", files);

function contentVivencia(vivencia) {
  if (!vivencia) return vivencias;

  const vivenciaEscolhida = getContentItem(vivencias, vivencia);

  if (vivenciaEscolhida === undefined) {
    const errorMsg = `Erro: vivencia "${vivencia}" inválida.`;
    console.error(errorMsg);
    return [{ "vivencia": "vivencia_invalida" }];
  } else {
    return vivenciaEscolhida;
  }
}

export default contentVivencia;