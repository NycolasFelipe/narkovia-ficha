import loadJsonFiles from "../scripts/common/loadJsonFiles.js";
import getContentItem from "../scripts/common/getContentItem.js";

const files = ['categoria-extraordinario.json', 'categoria-insolito.json', 'categoria-ordinario.json', 'categoria-sobrehumano.json'];
const categorias = loadJsonFiles("categorias", files);

function contentCategoria(categoria) {
  if (!categoria) return categorias;

  if (categoria === "keys") {
    const keys = [];
    $.each(categorias, (index, item) => {
      keys.push(item.id);
    });
    return keys;
  }

  const categoriaEscolhida = getContentItem(categorias, categoria);

  if (categoriaEscolhida === undefined) {
    const errorMsg = `Erro: categoria "${categoria}" inválida.`;
    console.error(errorMsg);
    return [{ "categoria": "categoria_invalida" }];
  } else {
    return categoriaEscolhida;
  }
}

export default contentCategoria;