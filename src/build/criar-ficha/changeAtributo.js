import Atributo from "../content/classes/atributo.js";
import validaFicha from "./validaFicha.js";
function loadPontos(atributos) {
    $.each(atributos, (_index, atributo) => {
        $("#atributo .atributos").append(`
      <div class="${atributo.id} atributo mt-4">
        <div class="atributo-titulo text-white text-center">
          <p>${atributo.titulo}</p>
          <p class="atributo-gastos">0</p>
        </div>
        <div class="atributo-pontos text-center">
          <i class="bi bi-slash-square-fill"></i>
          <i class="bi bi-square"></i>
          <i class="bi bi-square"></i>
          <i class="bi bi-square"></i>
          <i class="bi bi-square"></i>
        </div>
      </div>
    `);
    });
}
function resetPontos() {
    const atributos = $("#atributo .atributo-pontos i:not(.bi-slash-square-fill)");
    $.each(atributos, (_index, atributo) => {
        $(atributo).removeClass("bi-square-fill");
        $(atributo).addClass("bi-square");
        $(".atributo-titulo").addClass("atributo-titulo-nulo");
        $(".atributo-gastos").addClass("atributo-gasto-nulo");
        $(".atributo-gastos").text("0");
    });
    $("#tamanho .bi-arrow-right-square-fill").one("mouseup", () => {
        const pontos = $("#atributo .pontos-composicao .pontos-disponiveis").text();
        $("#atributo .pontos-composicao .pontos-restantes").text(pontos);
    });
}
function handlePontos() {
    const selector = $("#atributo .atributo-pontos i:not(.bi-slash-square-fill)");
    $.each(["click", "touch"], (_k, v) => $(selector).on(v, (e) => {
        $(e.currentTarget).toggleClass("bi-square");
        $(e.currentTarget).toggleClass("bi-square-fill");
        const prevAll = $(e.currentTarget).prevAll();
        $.each(prevAll, (_i, prev) => {
            const element = $(prev).not(".bi-slash-square-fill");
            $(element).addClass("bi-square-fill");
            $(element).removeClass("bi-square");
        });
        const nextAll = $(e.currentTarget).nextAll();
        $.each(nextAll, (_i, next) => {
            const element = $(next);
            $(element).removeClass("bi-square-fill");
            $(element).addClass("bi-square");
        });
        const pontos = $(e.currentTarget).parent().find(".bi-square-fill").length + 1;
        const pontosCalculados = 2 ** pontos - 2;
        const pontosGastos = $(e.currentTarget).parents(".atributo").find(".atributo-gastos");
        $(pontosGastos).text(pontosCalculados);
        updatePontosRestantes();
        checkPontos();
    }));
}
function checkPontos() {
    const pontosRestantes = parseInt($("#atributo .pontos-restantes").text());
    if (pontosRestantes < 0) {
        $("#atributo .pontos-composicao span").addClass("text-danger");
        $("#atributo .pontos-alerta").css("display", "block");
        $("#atributo .pontos-ok").css("display", "none");
        $("#atributo .pontos-composicao").removeClass("pontos-composicao-mb");
        $("#atributo .warning-pontos-excedentes").removeClass("d-none");
        $("#atributo").data("valid", false);
    }
    else if (pontosRestantes === 0) {
        $("#atributo .pontos-composicao span").removeClass("text-danger");
        $("#atributo .pontos-alerta").css("display", "none");
        $("#atributo .pontos-ok").css("display", "block");
        $("#atributo .pontos-composicao").removeClass("pontos-composicao-mb");
        $("#atributo .warning-pontos-excedentes").addClass("d-none");
        $("#atributo").data("valid", true);
    }
    else {
        $("#atributo .pontos-composicao span").removeClass("text-danger");
        $("#atributo .pontos-alerta").css("display", "none");
        $("#atributo .pontos-ok").css("display", "none");
        $("#atributo .pontos-composicao").addClass("pontos-composicao-mb");
        $("#atributo").data("valid", false);
        $("#atributo .warning-pontos-excedentes").addClass("d-none");
    }
    if ($("#atributo").data("valid")) {
        $("#resumoPreviewModal .preview-atributo + ul li:not(.preview-atributo-empty)").remove();
        let atributos = $("#atributo .atributo").get().reverse();
        $.each(atributos, (_index, atributo) => {
            const classe = $(atributo).attr("class")?.toString().split(" ")[0];
            const tipo = $(atributo).find(".atributo-titulo p:first").text();
            const valor = $(atributo).find(".bi-square-fill").length;
            let pontos = `<i class="bi bi-slash-square-fill"></i>`;
            for (let i = 0; i < valor; i++)
                pontos += `<i class="bi bi-square-fill ps-1"></i>`;
            const atributoResumoItem = `
        <li class="${classe} preview-atributo-item">
          <span>${tipo}</span>
          <span class="preview-atributo-line"></span>
          <span>${pontos}</span>
        </li>
      `;
            $("#resumoPreviewModal .preview-atributo + ul").prepend(atributoResumoItem);
        });
    }
    validaFicha();
}
function updatePontosRestantes() {
    const pontosGastos = $(".atributo-gastos");
    let pontosGastosTotais = 0;
    $.each(pontosGastos, (_index, pontoGasto) => {
        const pontoGastoInt = parseInt($(pontoGasto).text());
        pontosGastosTotais += pontoGastoInt;
        if (pontoGastoInt === 0) {
            $(pontoGasto).addClass("atributo-gasto-nulo");
            $(pontoGasto).parents(".atributo-titulo").addClass("atributo-titulo-nulo");
        }
        else {
            $(pontoGasto).removeClass("atributo-gasto-nulo");
            $(pontoGasto).parents(".atributo-titulo").removeClass("atributo-titulo-nulo");
        }
    });
    const pontosDisponiveis = parseInt($("#atributo .pontos-composicao .pontos-disponiveis").text());
    const pontosRestantes = $("#atributo .pontos-composicao .pontos-restantes");
    $(pontosRestantes).text(pontosDisponiveis - pontosGastosTotais);
}
function updatePontosDisponiveis() {
    $("#tamanho .bi-arrow-right-square-fill").on("mouseup", () => {
        let pontosCategoria = parseInt($("#categoria .composicao").text());
        let pontosVivencia = $("#idade .vivenciaComposicao").text();
        let pontosVivenciaInt = pontosVivencia === "-" ? 0 : parseInt(pontosVivencia);
        let pontosSoma = pontosCategoria + pontosVivenciaInt;
        $("#atributo .pontos-composicao .pontos-disponiveis").text(pontosSoma);
    });
    $("#tamanho .bi-arrow-right-square-fill").one("mouseup", () => {
        const pontos = $("#atributo .pontos-composicao .pontos-disponiveis").text();
        $("#atributo .pontos-composicao .pontos-restantes").text(pontos);
    });
}
function changeAtributo() {
    const atributos = Atributo.getItems();
    const contentLoaded = setInterval(() => {
        if (atributos.length === 8) {
            clearInterval(contentLoaded);
            loadPontos(atributos);
            updatePontosDisponiveis();
            handlePontos();
            updatePontosRestantes();
            $("#atributo").data("valid", false);
        }
    }, 100);
    $("#categoria select").on("change", () => resetPontos());
    $("#idade input").focus(() => resetPontos());
    $("#idade input").on("touchend", () => resetPontos());
    $("#idade .idade-mais").on("click", () => resetPontos());
    $("#idade .idade-menos").on("click", () => resetPontos());
    $("#tamanho .bi-arrow-right-square-fill").one("mouseup", () => {
        $(".preview-atributo").prev().removeClass("d-none");
        $(".preview-atributo").next().removeClass("d-none");
        $(".preview-atributo-empty").removeClass("d-none");
    });
}
export default changeAtributo;
