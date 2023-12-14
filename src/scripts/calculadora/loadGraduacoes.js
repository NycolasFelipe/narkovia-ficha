import contentGraduacoes from "../../content/graduacoes.js";
import removeDiacritics from "../common/removeDiacritics.js";

export default function loadGraduacoes() {
  const graduacoes = contentGraduacoes();

  $.each(graduacoes, (i, e) => {
    const graduacao = graduacoes[i];

    const graduacaoTipo = `
      <div id="${i}" class="d-flex flex-wrap justify-content-between mb-4 mt-3">
        <h4 class="w-100 mb-4">${graduacao.titulo}</h4>
      </div>
    `;
    $("#graduacoes").append(graduacaoTipo);

    const graduacaoSubtotal = `
      <div class="subtotal w-100">
        <p>Subtotal:</p>
        <span>0</span>
      </div>
    `;
    $(`#${i}`).append(graduacaoSubtotal);

    $(`#${i}`).each((j, f) => {
      $.each(graduacao.itens, (k, g) => {
        const graduacaoId = removeDiacritics(g);
        const graduacaoHtml = `
          <div class="graduacao w-40">
            <p class="titulo">${g}: <span>0</span></p>
            <table class="table table-bordered graduacoes white-bg">
              <tr>
                <td></td><td></td><td></td><td></td><td></td>
              </tr>
            </table>
            <input type="range" class="form-range px-2" 
              min="1" max="5" step="1" value="0" id="range${graduacaoId}"
            >
          </div>
        `;
        $(`#${i}`).append(graduacaoHtml);
      });
    });
  });

  const graduacaoTotalHtml = `
    <div class="total-graduacoes w-100">
      <p>Graduações | Total: <span>0</span></p>
      <button class="limpar btn btn-light button button-sm h-75 lh-1 border-2 w-75">
        Limpar
      </button>
    </div>
  `;
  $("#graduacoes").append(graduacaoTotalHtml);
}