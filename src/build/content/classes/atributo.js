import getContentItem from "../getContentItem.js";
import loadJsonFiles from "../loadJsonFiles.js";
const files = ['atributo-aura.json', 'atributo-captacao.json', 'atributo-celeridade.json', 'atributo-eteressencia.json', 'atributo-idoneidade.json', 'atributo-pujanca.json', 'atributo-sapiencia.json', 'atributo-tenacidade.json'];
const atributos = loadJsonFiles("atributos", files);
class Atributo {
    static getItemById = function (id) {
        const item = getContentItem(atributos, id);
        if (typeof item === "undefined") {
            console.error(`Erro: categoria <${id}> inválida`);
        }
        else {
            return item;
        }
    };
    static getItemsKeys = function () {
        const keys = [];
        $.each(atributos, (_index, item) => {
            const id = item?.id;
            if (id) {
                keys.push(item.id);
            }
        });
        return keys;
    };
    static getItems = function () {
        return atributos;
    };
}
export default Atributo;
