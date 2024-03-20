const PASSOS = ["ancestralidade", "categoria", "idade", "conduta", "tamanho", "atributo", "graduacao-conduta", "graduacao", "passo-9"];
function updateQueryParam(value, key = "passo") {
    const url = new URL(window.location.href);
    url.searchParams.set(key, value);
    window.history.pushState({}, '', url.toString());
    $("#criar-ficha .avancar-passo i").off("click");
    $(window).scrollTop(250);
    validaFicha();
}
function exibirPassoAtual(passoAtual) {
    $.each(PASSOS, (_index, passo) => {
        $(`#${passoAtual}`).removeClass("d-none");
        if (passo !== passoAtual) {
            $(`#${passo}`).addClass("d-none");
        }
    });
}
function getPasso(passoAtual, tipo) {
    let proximoPasso;
    let ultimoPasso;
    $.each(PASSOS, (index, item) => {
        if (item === passoAtual) {
            if (index < 1) {
                ultimoPasso = PASSOS[0];
            }
            else {
                ultimoPasso = PASSOS[index - 1];
            }
            if (index >= PASSOS.length - 1) {
                proximoPasso = PASSOS[PASSOS.length - 1];
            }
            else {
                proximoPasso = PASSOS[index + 1];
            }
        }
    });
    if (tipo === "proximo") {
        return proximoPasso;
    }
    else if (tipo === "ultimo") {
        return ultimoPasso;
    }
}
function getPassoButton(passoAtual, tipo) {
    let passoButton;
    if (tipo === "proximo") {
        passoButton = `#${passoAtual} .bi-arrow-right-square-fill`;
    }
    else if (tipo === "ultimo") {
        passoButton = `#${passoAtual} .bi-arrow-left-square-fill`;
    }
    return passoButton;
}
function checkPasso(passo, passoButton) {
    $(passoButton).on("click", () => {
        updateQueryParam(passo);
    });
}
function allowPasso(allowed, passoButton) {
    if (allowed) {
        $(passoButton).addClass("avancar-passo-ok");
    }
    else {
        $(passoButton).removeClass("avancar-passo-ok");
        $(passoButton).off("click");
    }
}
function validaFicha() {
    let passoAtual = window.location.search;
    passoAtual = passoAtual.split("=")[1];
    let proximoPasso = getPasso(passoAtual, "proximo");
    let ultimoPasso = getPasso(passoAtual, "ultimo");
    let proximoPassoButton = getPassoButton(passoAtual, "proximo");
    let ultimoPassoButton = getPassoButton(passoAtual, "ultimo");
    exibirPassoAtual(passoAtual);
    if (proximoPasso !== undefined && proximoPassoButton !== undefined) {
        checkPasso(proximoPasso, proximoPassoButton);
    }
    if (ultimoPasso !== undefined && ultimoPassoButton !== undefined) {
        checkPasso(ultimoPasso, ultimoPassoButton);
    }
    if (proximoPassoButton !== undefined) {
        switch (passoAtual) {
            case "ancestralidade":
                const ancestralidade = !$("#ancestralidade select").val()?.toString().includes("Escolha");
                if (typeof ancestralidade === "boolean") {
                    allowPasso(ancestralidade, proximoPassoButton);
                }
                break;
            case "categoria":
                const categoria = !$("#categoria select option:selected")?.text().includes("Escolha");
                allowPasso(categoria, proximoPassoButton);
                break;
            case "idade":
                const idadeInputValor = $('#idade input').val()?.toString();
                const idadeInputNotFocused = !$('#idade input').is(":focus");
                if (idadeInputValor !== undefined) {
                    const idadeInputInt = parseInt(idadeInputValor);
                    const idade = idadeInputInt > 0 && idadeInputNotFocused;
                    const ancestralidadeEscolhida = $("#ancestralidade option:selected").text();
                    $("#idade .passo-descricao span").text(ancestralidadeEscolhida);
                    allowPasso(idade, proximoPassoButton);
                }
                break;
            case "conduta":
                const conduta = $("#conduta").data("valid");
                const loaded = $("#conduta").data("loaded");
                if (!loaded) {
                    $("#conduta .condutas").find(".slick-prev").trigger("click");
                    $("#conduta .loading").show();
                    $("#conduta .condutas").css("filter", "opacity(0.0)");
                    setTimeout(() => {
                        $("#conduta .loading").hide();
                        $("#conduta .condutas").css("filter", "opacity(1.0)");
                    }, 500);
                }
                $("#conduta").data("loaded", true);
                allowPasso(conduta, proximoPassoButton);
                break;
            case "tamanho":
                const tamanho = $("#tamanho").data("valid");
                allowPasso(tamanho, proximoPassoButton);
                break;
            case "atributo":
                const atributo = $("#atributo").data("valid");
                allowPasso(atributo, proximoPassoButton);
                break;
            case "graduacao-conduta":
                const graduacaoConduta = $("#graduacao-conduta").data("valid");
                allowPasso(graduacaoConduta, proximoPassoButton);
                break;
            case "graduacao":
                const graduacao = $("#graduacao").data("valid");
                allowPasso(graduacao, proximoPassoButton);
                break;
            case "passo-9":
                break;
            default:
                break;
        }
    }
}
export default validaFicha;
