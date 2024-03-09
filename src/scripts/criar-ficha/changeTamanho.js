import validaPasso from "./validaPasso.js";

function changeTamanho() {
  $("#tamanho").data("valid", false);

  $("#tamanho select").on("change", (e) => {
    const tamanho = $(e.currentTarget).val();
    
    if (!tamanho.includes("Escolha")) {
      //Atualiza preview
      $("#tamanho").data("valid", true);
      $(".preview-tamanho").text(tamanho);
    } else {
      //Atualiza preview
      $("#tamanho").data("valid", false);
      $(".preview-tamanho").text("");
    }

    //Atualiza preview
    $(".preview-tamanho").prev().removeClass("d-none");

    validaPasso();
  });
}

export default changeTamanho;