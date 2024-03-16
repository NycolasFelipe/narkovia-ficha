import getContentItem from "../getContentItem.js";
import loadJsonFiles from "../loadJsonFiles.js";
const files = ['categoria-extraordinario.json', 'categoria-insolito.json', 'categoria-ordinario.json', 'categoria-sobrehumano.json'];
const categorias = loadJsonFiles("categorias", files);
class Categoria {
    static getItemById = function (id) {
        const item = getContentItem(categorias, id);
        if (typeof item === "undefined") {
            console.error(`Erro: categoria <${id}> inválida`);
        }
        else {
            return item;
        }
    };
    static getItemsKeys = function () {
        const keys = [];
        $.each(categorias, (_index, item) => {
            const id = item?.id;
            if (id) {
                keys.push(item.id);
            }
        });
        return keys;
    };
    static getItems = function () {
        return categorias;
    };
}
export default Categoria;
