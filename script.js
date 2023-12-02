import changeAncestralidade from "./src/scripts/changeAncestralidade.js";
import changeCategoria from "./src/scripts/changeCategoria.js";
import changeIdade from "./src/scripts/changeIdade.js";
import incrementIdade from "./src/scripts/incrementIdade.js";

//Atualiza ancestralidade
$('#ancestralidade').on("change", changeAncestralidade);

//Atualiza categoria
$('#categoria').on("change", changeCategoria);

//Atualiza ciclos de vida
$.each(["mousemove", "touchmove"], (k, v) => $('#idade').on(v, changeIdade));

//Atualiza valor do slide de idade
$(".ficha-idade .idade-menos").on("click", () => {
  incrementIdade(-1);
  changeIdade();
})

$(".ficha-idade .idade-mais").on("click", () => {
  incrementIdade(1);
  changeIdade();
})
