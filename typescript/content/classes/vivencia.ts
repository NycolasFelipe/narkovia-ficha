import getContentItem from "../getContentItem.js";
import loadJsonFiles from "../loadJsonFiles.js";
import ContentVivencia from "../interfaces/vivencia.js";

const files = ['vivencia-infante.json', 'vivencia-jovem.json', 'vivencia-maduro.json', 'vivencia-senior.json'];
const vivencias = loadJsonFiles("vivencias", files) as unknown as ContentVivencia[];

class Vivencia {
  static getItemById = function (id: string) {
    const item = getContentItem(vivencias, id) as unknown as ContentVivencia;
    if (typeof item === "undefined") {
      console.error(`Erro: vivência <${id}> inválida`);
    } else {
      return item;
    }
  }
  static getItems = function () {
    return vivencias;
  }
}

export default Vivencia;
