import contentJornada from "../content/jornada.js";

export default function changeConduta() {
  let jornada = $("#jornada").val();
  jornada = contentJornada("condutas", jornada);

  let conduta = $("#conduta").val();
  conduta = jornada.find((item) => item.conduta.includes(conduta));
  
  const condutaGanhos = conduta["ganhos"];
  const condutaGanhosLivres = conduta["ganhos-livres"];

  $("#conduta-ganhos .conduta-ganho").remove();
  $("#conduta-ganhos .conduta-ganho-livre").remove();

  $.each(condutaGanhos, (i, e) => {
    const item = `<tr><td class="conduta-ganho text-center">${condutaGanhos[i]}</td></tr>`;
    $("#conduta-ganhos").append(item);
  });

  $.each(condutaGanhosLivres, (i, e) => {
    const item = `<tr><td class="conduta-ganho text-center">${condutaGanhosLivres[i]}</td></tr>`;
    $("#conduta-ganhos").append(item);
  });
}