import contentJornada from "../../content/jornada.js";

export default function changeConduta() {
  let jornada = $("#jornada select#jornadas").val();
  jornada = contentJornada("condutas", jornada);

  let conduta = $("#jornada select#condutas").val();
  conduta = Array.isArray(jornada) ? jornada.find((item) => item.conduta.includes(conduta)) : [];
  
  const condutaGanhos = conduta["ganhos"];
  const condutaGanhosLivres = conduta["ganhos-livres"];

  $("#jornada .conduta-ganho").remove();
  $("#jornada .conduta-ganho-livre").remove();

  $.each(condutaGanhos, (i, e) => {
    const item = `<tr><td class="conduta-ganho text-center">${condutaGanhos[i]}</td></tr>`;
    $("#jornada #conduta-ganhos").append(item);
  });

  $.each(condutaGanhosLivres, (i, e) => {
    const item = `<tr><td class="conduta-ganho text-center">${condutaGanhosLivres[i]}</td></tr>`;
    $("#jornada #conduta-ganhos").append(item);
  });
}