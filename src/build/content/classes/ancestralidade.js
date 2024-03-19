import loadJsonFiles from "../loadJsonFiles.js";
import getContentItem from "../getContentItem.js";
const files = ['ancestralidade-automato.json', 'ancestralidade-comensal.json', 'ancestralidade-espuria.json', 'ancestralidade-gandulo.json', 'ancestralidade-humano-miraniano.json', 'ancestralidade-humano-narkoviano.json', 'ancestralidade-meandro.json', 'ancestralidade-nulo.json', 'ancestralidade-perenal.json', 'ancestralidade-progenito-cisco.json', 'ancestralidade-progenito-dunfrine.json', 'ancestralidade-progenito-seltino.json', 'ancestralidade-progenito-titere.json', 'ancestralidade-sanguefrio.json'];
const ancestralidades = loadJsonFiles("ancestralidades", files);
class Ancestralidade {
    static getItemById = function (id) {
        if (id.includes("espuria")) {
            id = "espuria";
        }
        const item = getContentItem(ancestralidades, id);
        if (typeof item === "undefined") {
            console.error(`Erro: ancestralidade <${id}> inválida`);
        }
        else {
            return item;
        }
    };
    static getItemsKeys = function () {
        const keys = [];
        $.each(ancestralidades, (_index, item) => {
            const id = item?.id;
            if (id) {
                keys.push(item.id);
            }
        });
        return keys;
    };
    static getItems = function () {
        return ancestralidades;
    };
}
export default Ancestralidade;
