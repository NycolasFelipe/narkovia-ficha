import validaPasso from "./validaPasso.js";

function changeNome() {
  $("#nomePersonagem").on("change", () => {
    validaPasso();
  });
}

export default changeNome;
