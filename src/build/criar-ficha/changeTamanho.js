import validaFicha from "./validaFicha.js";
function changeTamanho() {
    $("#tamanho").data("valid", false);
    $("#tamanho select").on("change", (e) => {
        const tamanho = $(e.currentTarget).val()?.toString();
        if (typeof tamanho !== "undefined") {
            if (!tamanho.includes("Escolha")) {
                $("#tamanho").data("valid", true);
                $(".preview-tamanho").text(tamanho);
            }
            else {
                $("#tamanho").data("valid", false);
                $(".preview-tamanho").text("");
            }
            $(".preview-tamanho").prev().removeClass("d-none");
            validaFicha();
        }
    });
}
export default changeTamanho;
