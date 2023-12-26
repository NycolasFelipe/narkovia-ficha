import contentJornada from "../../content/jornada.js";

export default function changeConduta() {
  let jornadaVal = $("#jornada select#jornadas").val();
  let jornada = contentJornada("condutas", jornadaVal);

  let condutaVal = $("#jornada select#condutas").val();
  let conduta = condutaVal === null ? "" : condutaVal;

  if (!conduta.includes("Escolha") && conduta !== "") {
    conduta = Array.isArray(jornada) ? jornada.find((item) => item.conduta.includes(conduta)) : [];

    const condutaGanhos = conduta["ganhos"];
    const condutaGanhosLivres = conduta["ganhos-livres"];

    $("#jornada #conduta-ganhos").removeClass("d-none");
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
  } else {
    $("#jornada #conduta-ganhos").addClass("d-none");
  }
}