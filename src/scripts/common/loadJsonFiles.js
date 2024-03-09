function loadJsonFiles(folder, files) {
  const jsonItems = [];
  const pathname = window.location.origin;
  const path = pathname.includes("github") ? pathname + "/narkovia-ficha" : pathname;

  $.each(files, (index, jsonItem) => {
    fetch(`${path}/src/content/${folder}/${jsonItem}`)
      .then((response) => response.json())
      .then((json) => jsonItems.push(json));
  });

  return jsonItems;
}

export default loadJsonFiles;