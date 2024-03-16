import ContentAncestralidade from "./interfaces/ancestralidade.js";
import ContentAtributo from "./interfaces/atributo.js";
import ContentCategoria from "./interfaces/categoria.js";
import ContentConduta from "./interfaces/conduta.js";
import ContentVivencia from "./interfaces/vivencia.js";

function loadJsonFiles(folder: string, files: Array<string>) {
  let jsonItems;
  switch (folder) {
    case "ancestralidades":
      jsonItems = [] as ContentAncestralidade[];
      break;

    case "categorias":
      jsonItems = [] as ContentCategoria[];
      break;

    case "vivencias":
      jsonItems = [] as ContentVivencia[];
      break;

    case "condutas":
      jsonItems = [] as ContentConduta[];
      break;

    case "atributos":
      jsonItems = [] as ContentAtributo[];
      break;

    case "graduacoes":
      jsonItems = [] as ContentAtributo[];
      break;
  }

  const pathname = window.location.origin;
  const path = pathname.includes("github") ? pathname + "/narkovia-ficha" : pathname;

  $.each(files, (_index, jsonItem) => {
    fetch(`${path}/src/content/${folder}/${jsonItem}`)
      .then((response) => response.json())
      .then((json) => jsonItems.push(json));
  });

  return jsonItems;
}

export default loadJsonFiles;

