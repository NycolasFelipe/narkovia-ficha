import removeDiacritics from "../common/removeDiacritics.js";

export default function loadGraduacoes() {
  const graduacoes = {
    "agudeza": {
      "titulo": "Habilidades de Agudeza",
      "itens": ["Sabedoria", "Determinação", "Intuição", "Percepção"]
    },
    "combate": {
      "titulo": "Habilidades de Combate",
      "itens": ["Ataque", "Mira", "Proteção"]
    },
    "erudicao": {
      "titulo": "Habilidades de Erudição",
      "itens": ["Educação", "Alopatia", "Alquimia", "Mecânica"]
    },
    "sagacidade": {
      "titulo": "Habilidades de Sagacidade",
      "itens": ["Artimanha", "Sutilidade", "Mobilidade"]
    },
    "tecnica": {
      "titulo": "Habilidades de Técnica",
      "itens": ["Arguição", "Sobrevivência", "Laboração", "Ocultismo", "Hierática"]
    },
    "lideranca": {
      "titulo": "Habilidades de Liderança",
      "itens": ["Comando", "Inspiração"]
    },
    "influencia": {
      "titulo": "Habilidades de Influência",
      "itens": [
        "Dissuasão", "Blefe", "Intimidação", "Provocação", "Prestígio",
        "Performance", "Etiqueta", "Charme"
      ]
    },
  };

  $.each(graduacoes, (i, e) => {
    const graduacao = graduacoes[i];

    const graduacaoTipo = `
      <div id="${i}" class="d-flex flex-wrap justify-content-between mt-3">
        <h4 class="w-100 mb-4">${graduacao.titulo}</h4>
      </div>
    `;
    $("#graduacoes").append(graduacaoTipo);

    $(`#${i}`).each((j, f) => {
      $.each(graduacao.itens, (k, g) => {
        const graduacaoId = removeDiacritics(g);
        const graduacaoHtml = `
          <div class="graduacao w-40">
            <p class="titulo">${g}: <span>0</span></p>
            <table class="table table-bordered">
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
    <div class="total">
      <p>Total: <span>0</span></p>
    </div>
  `;
  $("#graduacoes").append(graduacaoTotalHtml);
}