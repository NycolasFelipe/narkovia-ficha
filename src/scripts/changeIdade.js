import contentIdade from "../content/idade.js";
import removeDiacritics from "./removeDiacritics.js";

export default function changeIdade() {
  $('.ficha-idade .idade-value').text($("#idade").val());

  const valor = parseInt($('#idade').val());
  const conteudoIdade = contentIdade("content");
  const textExpectativa = $('.expectativa').text();

  let idadeHumano = removeDiacritics(textExpectativa).toLowerCase().includes("humanos");
  let idadeEspuria = removeDiacritics(textExpectativa).toLowerCase().includes("espurias");
  let idadeSeltino = removeDiacritics(textExpectativa).toLowerCase().includes("seltinos");
  let idadeDunfrines = removeDiacritics(textExpectativa).toLowerCase().includes("frines");
  let idadeTiteres = removeDiacritics(textExpectativa).toLowerCase().includes("titeres");
  let idadeCiscos = removeDiacritics(textExpectativa).toLowerCase().includes("ciscos");
  let idadeComensais = removeDiacritics(textExpectativa).toLowerCase().includes("comensais");
  let idadePerenais = removeDiacritics(textExpectativa).toLowerCase().includes("perenais");
  let idadeSanguefrios = removeDiacritics(textExpectativa).toLowerCase().includes("sangue");
  let idadeNulos = removeDiacritics(textExpectativa).toLowerCase().includes("nulos");
  let idadeMeandros = removeDiacritics(textExpectativa).toLowerCase().includes("meandros");
  let idadeAutomatos = removeDiacritics(textExpectativa).toLowerCase().includes("automatos");
  let idadeGandulos = removeDiacritics(textExpectativa).toLowerCase().includes("gandulos");

  const idades = [
    idadeHumano,
    idadeEspuria,
    idadeSeltino,
    idadeDunfrines,
    idadeTiteres,
    idadeCiscos,
    idadeComensais,
    idadePerenais,
    idadeSanguefrios,
    idadeNulos,
    idadeMeandros,
    idadeAutomatos,
    idadeGandulos
  ];
  const idadesNome = [
    "humanos",
    "espurias",
    "seltinos",
    "dunfrines",
    "titeres",
    "ciscos",
    "comensais",
    "perenais",
    "sanguefrios",
    "nulos",
    "meandros",
    "automatos",
    "gandulos"
  ];

  $.each(idades, (i, e) => {
    if (e) {
      const vivencia = conteudoIdade[idadesNome[i]].vivencia;
      if (valor <= vivencia.infanteMax) {
        $(".vivencia").text("Infante");
        $(".vivenciaSortilegio").text("Suma +4");
        $(".vivenciaComposicao").text("-2");
        $(".vivenciaGraduacao").text("-12");
        $(".vivenciaViciosMax").text("-");
        $(".vivenciaMaestria").text("-4");
      } else if (valor >= vivencia.infanteMax + 1 && valor <= vivencia.jovemMax) {
        $(".vivencia").text("Jovem");
        $(".vivenciaSortilegio").text("-");
        $(".vivenciaComposicao").text("-");
        $(".vivenciaGraduacao").text("-6");
        $(".vivenciaViciosMax").text("+1");
        $(".vivenciaMaestria").text("-2");
      } else if (valor >= vivencia.jovemMax + 1 && valor <= vivencia.maduroMax) {
        $(".vivencia").text("Maduro");
        $(".vivenciaSortilegio").text("-");
        $(".vivenciaComposicao").text("-");
        $(".vivenciaGraduacao").text("-");
        $(".vivenciaViciosMax").text("+2");
        $(".vivenciaMaestria").text("-");
      } else {
        $(".vivencia").text("Senior");
        $(".vivenciaSortilegio").text("Suma -2");
        $(".vivenciaComposicao").text("-2");
        $(".vivenciaGraduacao").text("+12");
        $(".vivenciaViciosMax").text("+4");
        $(".vivenciaMaestria").text("+4");
      }
      return false;
    }
  })

  if (valor !== 0) {
    $(".ficha-idade .ficha-passo strong").addClass("concluido");
  } else {
    $(".ficha-idade .ficha-passo strong").removeClass("concluido");
  }
}