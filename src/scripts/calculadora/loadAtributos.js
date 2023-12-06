import removeDiacritics from "../common/removeDiacritics.js";

export default function loadAtributos() {
  const atributos = ["Aura", "Captação", "Celeridade", "Eteressência", "Idoneidade", "Sapiência", "Tenacidade", "Pujança"];

  $.each(atributos, (i, e) => {
    const atributoId = removeDiacritics(atributos[i]);
    const atributoHtml = `
      <div class="calculadora-atributo w-40">
        <p class="atributo-titulo">${atributos[i]}: <span>0</span></p>
        <table class="table table-bordered">
          <tr>
            <td></td><td></td><td></td><td></td><td></td>
          </tr>
        </table>
        <input type="range" class="form-range px-2 atributo-range" 
          min="1" max="5" step="1" value="0" id="range${atributoId}"
        >
      </div>
    `;
    $(".calculadora").append(atributoHtml);
  })

  const atributoTotalHtml = `
    <div class="calculadora-atributo-total">
      <p>Total: <span>0</span></p>
    </div>
  `;
  $(".calculadora").append(atributoTotalHtml);
}