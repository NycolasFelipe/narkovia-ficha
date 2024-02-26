import changeAncestralidade from "./changeAncestralidade.js";
import changeCategoria from "./changeCategoria.js";
import changeIdade from "./changeIdade.js";
import changeNome from "./changeNome.js";
import validaPasso from "./validaPasso.js";

function slickSlider(selector) {
  $(selector).slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
  $(selector).find("button")
    .css("border", "none")
    .css("background", "none")
    .css("height", "100%");

  $(selector).find(".slick-prev").html(`<i class="bi bi-chevron-compact-left"></i>`);
  $(selector).find(".slick-next").html(`<i class="bi bi-chevron-compact-right"></i>`);

  $(selector).find("button i")
    .css("color", "#fff")
    .css("font-size", "1.5rem");
}

$(document).ready(() => {
  changeNome();
  changeAncestralidade();
  changeCategoria();
  changeIdade();
  validaPasso();
  slickSlider("#conduta .condutas");
});
