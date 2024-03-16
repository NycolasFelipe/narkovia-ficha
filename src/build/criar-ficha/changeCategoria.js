import Categoria from "../content/classes/categoria.js";
import validaPasso from "./validaFicha.js";
function changeCategoria() {
    $('#categoria select').on("change", (e) => {
        const tipo = $(e.currentTarget).val()?.toString();
        $('#categoria table').removeClass("d-none");
        if (typeof tipo !== "undefined" && !tipo.includes("Escolha")) {
            const categoria = Categoria.getItemById(tipo);
            if (typeof categoria !== "undefined") {
                $(".preview-categoria").text(categoria.titulo);
                $(".preview-categoria").prev().removeClass("d-none");
                $('#categoria table .atributos').text(categoria.atributos);
                $('#categoria table .sortilegio').text(categoria.sortilegio);
                $('#categoria table .composicao').text(categoria.composicao);
                $('#categoria table .graduacao').text(categoria.graduacao);
                $('#categoria table .maestria').text(categoria.maestria);
            }
        }
        else {
            $(".preview-categoria").text("");
            $('#categoria table').addClass("d-none");
        }
        validaPasso();
    });
}
export default changeCategoria;
