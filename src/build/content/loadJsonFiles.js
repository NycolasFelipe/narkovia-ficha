function loadJsonFiles(folder, files) {
    let jsonItems;
    switch (folder) {
        case "ancestralidades":
            jsonItems = [];
            break;
        case "categorias":
            jsonItems = [];
            break;
        case "vivencias":
            jsonItems = [];
            break;
        case "condutas":
            jsonItems = [];
            break;
        case "atributos":
            jsonItems = [];
            break;
        case "graduacoes":
            jsonItems = [];
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
