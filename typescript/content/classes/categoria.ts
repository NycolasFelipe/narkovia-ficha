import getContentItem from "../getContentItem.js";
import loadJsonFiles from "../loadJsonFiles.js";
import ContentCategoria from "../interfaces/categoria.js";

const files = ['categoria-extraordinario.json', 'categoria-insolito.json', 'categoria-ordinario.json', 'categoria-sobrehumano.json'];
const categorias = loadJsonFiles("categorias", files) as unknown as ContentCategoria[];

class Categoria {
  static getItemById = function (id: string) {
    const item = getContentItem(categorias, id) as unknown as ContentCategoria;
    if (typeof item === "undefined") {
      console.error(`Erro: categoria <${id}> inválida`);
    } else {
      return item;
    }
  }
  static getItemsKeys = function () {
    const keys: Array<string> = [];
    $.each(categorias, (_index, item: ContentCategoria) => {
      const id = item?.id;
      if (id) {
        keys.push(item.id);
      }
    });
    return keys;
  }
  static getItems = function () {
    return categorias;
  }
}

export default Categoria;