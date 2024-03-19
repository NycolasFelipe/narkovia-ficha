import loadJsonFiles from "../loadJsonFiles.js";
import getContentItem from "../getContentItem.js";
import ContentAncestralidade from "../interfaces/ancestralidade.js";

const files = ['ancestralidade-automato.json', 'ancestralidade-comensal.json', 'ancestralidade-espuria.json', 'ancestralidade-gandulo.json', 'ancestralidade-humano-miraniano.json', 'ancestralidade-humano-narkoviano.json', 'ancestralidade-meandro.json', 'ancestralidade-nulo.json', 'ancestralidade-perenal.json', 'ancestralidade-progenito-cisco.json', 'ancestralidade-progenito-dunfrine.json', 'ancestralidade-progenito-seltino.json', 'ancestralidade-progenito-titere.json', 'ancestralidade-sanguefrio.json'];
const ancestralidades = loadJsonFiles("ancestralidades", files) as unknown as ContentAncestralidade[];

class Ancestralidade {
  static getItemById = function (id: string) {
    if (id.includes("espuria")) {
      id = "espuria";
    }
    const item = getContentItem(ancestralidades, id) as unknown as ContentAncestralidade;
    if (typeof item === "undefined") {
      console.error(`Erro: ancestralidade <${id}> inválida`);
    } else {
      return item;
    }
  }
  static getItemsKeys = function () {
    const keys: Array<string> = [];
    $.each(ancestralidades, (_index, item: ContentAncestralidade) => {
      const id = item?.id;
      if (id) {
        keys.push(item.id);
      }
    });
    return keys;
  }
  static getItems = function () {
    return ancestralidades;
  }
}

export default Ancestralidade;