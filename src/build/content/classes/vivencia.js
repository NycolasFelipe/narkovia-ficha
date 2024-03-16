import getContentItem from "../getContentItem.js";
import loadJsonFiles from "../loadJsonFiles.js";
const files = ['vivencia-infante.json', 'vivencia-jovem.json', 'vivencia-maduro.json', 'vivencia-senior.json'];
const vivencias = loadJsonFiles("vivencias", files);
class Vivencia {
    static getItemById = function (id) {
        const item = getContentItem(vivencias, id);
        if (typeof item === "undefined") {
            console.error(`Erro: vivência <${id}> inválida`);
        }
        else {
            return item;
        }
    };
    static getItems = function () {
        return vivencias;
    };
}
export default Vivencia;
