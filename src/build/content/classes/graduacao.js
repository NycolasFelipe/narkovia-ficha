import getContentItem from "../getContentItem.js";
import loadJsonFiles from "../loadJsonFiles.js";
const files = ['graduacao-agudeza.json', 'graduacao-combate.json', 'graduacao-erudicao.json', 'graduacao-influencia.json', 'graduacao-sagacidade.json', 'graduacao-tecnica.json'];
const graduacoes = loadJsonFiles("graduacoes", files);
class Graduacao {
    static getItemById = function (id) {
        const item = getContentItem(graduacoes, id);
        if (typeof item === "undefined") {
            console.error(`Erro: graduacao <${id}> inválida`);
        }
        else {
            return item;
        }
    };
    static getItemsKeys = function () {
        const keys = [];
        $.each(graduacoes, (_index, item) => {
            const id = item?.id;
            if (id) {
                keys.push(item.id);
            }
        });
        return keys;
    };
    static getItems = function () {
        return graduacoes;
    };
}
export default Graduacao;
