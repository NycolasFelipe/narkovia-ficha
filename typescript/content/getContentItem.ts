import ContentAncestralidade from "./interfaces/ancestralidade.js";
import ContentAtributo from "./interfaces/atributo.js";
import ContentCategoria from "./interfaces/categoria.js";
import ContentConduta from "./interfaces/conduta.js";
import ContentGraduacao from "./interfaces/graduacao.js";
import ContentVivencia from "./interfaces/vivencia.js";

function getContentItem(content: Array<
  ContentAncestralidade |
  ContentCategoria |
  ContentVivencia |
  ContentConduta |
  ContentAtributo |
  ContentGraduacao
>, id: string) {
  if (content !== undefined) {
    let contentItem;
    $.each(content, (_index, item) => {
      if (item.id === id) {
        contentItem = item;
        return false;
      }
    });
    return contentItem;
  }
}

export default getContentItem;