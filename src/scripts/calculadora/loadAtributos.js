import contentAtributos from "../../content/atributos.js";
import removeDiacritics from "../common/removeDiacritics.js";

export default function loadAtributos() {
  const atributos = contentAtributos();

  $.each(atributos, (i, e) => {
    const atributoId = removeDiacritics(atributos[i]);
    const atributoHtml = `
      <div class="atributo w-40">
        <p class="titulo">${atributos[i]}: <span>0</span></p>
        <table class="table table-bordered">
          <tr>
            <td></td><td></td><td></td><td></td><td></td>
          </tr>
        </table>
        <input type="range" class="form-range px-2" 
          min="1" max="5" step="1" value="0" id="range${atributoId}"
        >
      </div>
    `;
    $("#atributos").append(atributoHtml);
  })

  const atributoTotalHtml = `
    <div class="total w-100">
      <p>Total: <span>0</span></p>
    </div>
  `;
  $("#atributos").append(atributoTotalHtml);
}