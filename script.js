import contentIdade from "./src/content/idade.js";
import changeAncestralidade from "./src/scripts/changeAncestralidade.js";
import changeCategoria from "./src/scripts/changeCategoria.js";

const events = ["mousemove", "touchmove"];

$('#ancestralidade').on("change", changeAncestralidade);
$('#categoria').on("change", changeCategoria);

function changeIdade() {
  $('.ficha-idade .idade-value').text($("#idade").val());

  const valor = parseInt($('#idade').val())
  const idadeHumano = $('.expectativa').text().toLowerCase().includes("humanos");
  const idadeEspuria = $('.expectativa').text().toLowerCase().includes("espúria");

  if (idadeHumano) {
    if (valor <= 15) {
      $(".vivencia").text("Infante");
    } else if (valor >= 16 && valor <= 30) {
      $(".vivencia").text("Jovem");
    } else if (valor >= 31 && valor <= 60) {
      $(".vivencia").text("Maduro");
    } else {
      $(".vivencia").text("Senior");
    }
  } else if (idadeEspuria) {
    if (valor <= 15) {
      $(".vivencia").text("Infante");
    } else if (valor >= 16 && valor <= 80) {
      $(".vivencia").text("Jovem");
    } else if (valor >= 81 && valor <= 160) {
      $(".vivencia").text("Maduro");
    } else {
      $(".vivencia").text("Senior");
    }
  }
}

$.each(events, (k, v) => {
  $('#idade').on(v, changeIdade);
})

$(".ficha-idade .idade-menos").on("click", () => {
  $('#idade').val(parseInt($('#idade').val()) - 1);
  changeIdade();
})

$(".ficha-idade .idade-mais").on("click", () => {
  $('#idade').val(parseInt($('#idade').val()) + 1);
  changeIdade();
})

