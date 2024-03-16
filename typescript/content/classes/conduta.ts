import getContentItem from "../getContentItem.js";
import loadJsonFiles from "../loadJsonFiles.js";
import ContentConduta from "../interfaces/conduta.js";

const files = ['conduta-abastado.json', 'conduta-alopata.json', 'conduta-alquimista.json', 'conduta-aristocrata.json', 'conduta-artesao.json', 'conduta-artifice.json', 'conduta-cacador-da-noite.json', 'conduta-cacador-de-cabecas.json', 'conduta-eremita.json', 'conduta-escritor.json', 'conduta-explorador.json', 'conduta-expurgador.json', 'conduta-extrator.json', 'conduta-falsificador.json', 'conduta-filha-da-primeira-luz.json', 'conduta-guarda.json', 'conduta-inspetor.json', 'conduta-inventor.json', 'conduta-ladrao.json', 'conduta-menestrel.json', 'conduta-mercenario.json', 'conduta-mestre-de-vislumbre.json', "conduta-mestre-mun'kai.json", 'conduta-miliciano.json', 'conduta-perfomancer.json', 'conduta-pinceiro.json', 'conduta-pirata.json', 'conduta-professor-estudioso.json', 'conduta-profeta.json', 'conduta-sacerdote.json', 'conduta-servidor.json', 'conduta-servo-de-honra.json', 'conduta-trapaceiro-golpista.json', 'conduta-tribal.json'];
const condutas = loadJsonFiles("condutas", files) as unknown as ContentConduta[];

class Conduta {
  static getItemById = function (id: string) {
    const item = getContentItem(condutas, id) as unknown as ContentConduta;
    if (typeof item === "undefined") {
      console.error(`Erro: conduta <${id}> inválida`);
    } else {
      return item;
    }
  }
  static getItemsKeys = function () {
    const keys: Array<string> = [];
    $.each(condutas, (_index, item: ContentConduta) => {
      const id = item?.id;
      if (id) {
        keys.push(item.id);
      }
    });
    return keys;
  }
  static getItems = function () {
    return condutas;
  }
}

export default Conduta;