import getContentItem from "../getContentItem.js";
import loadJsonFiles from "../loadJsonFiles.js";
import ContentGraduacao from "../interfaces/graduacao.js";

const files = ['graduacao-agudeza.json', 'graduacao-combate.json', 'graduacao-erudicao.json', 'graduacao-influencia.json', 'graduacao-sagacidade.json', 'graduacao-tecnica.json'];
const graduacoes = loadJsonFiles("graduacoes", files) as unknown as ContentGraduacao[];

class Graduacao {
  static getItemById = function (id: string) {
    const item = getContentItem(graduacoes, id) as unknown as ContentGraduacao;
    if (typeof item === "undefined") {
      console.error(`Erro: graduacao <${id}> inválida`);
    } else {
      return item;
    }
  }
  static getItemsKeys = function () {
    const keys: Array<string> = [];
    $.each(graduacoes, (_index, item: ContentGraduacao) => {
      const id = item?.id;
      if (id) {
        keys.push(item.id);
      }
    });
    return keys;
  }
  static getItems = function () {
    return graduacoes;
  }
}

export default Graduacao;