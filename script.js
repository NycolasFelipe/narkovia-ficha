import changeAncestralidade from "./src/scripts/changeAncestralidade.js";
import changeCategoria from "./src/scripts/changeCategoria.js";
import changeConduta from "./src/scripts/changeConduta.js";
import changeIdade from "./src/scripts/changeIdade.js";
import changeJornada from "./src/scripts/changeJornada.js";
import incrementIdade from "./src/scripts/incrementIdade.js";

//Atualiza ancestralidade
$("#ancestralidade").on("change", changeAncestralidade);

//Atualiza jornadas
$("#jornada").on("change", changeJornada);

//Atualiza condutas
$("#conduta").on("change", changeConduta);

//Atualiza categoria
$("#categoria").on("change", changeCategoria);

//Atualiza ciclos de vida
$.each(["mousemove", "touchmove"], (k, v) => $("#idade").on(v, changeIdade));

//Atualiza valor do slide de idade
$(".ficha-idade .idade-menos").on("click", () => {
  incrementIdade(-1);
  changeIdade();
})

$(".ficha-idade .idade-mais").on("click", () => {
  incrementIdade(1);
  changeIdade();
})