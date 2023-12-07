export default function contentJornada(tipo, nome) {
  const condutas = {
    "erudicao": [
      {
        "conduta": "professor",
        "titulo": "Professor/Estudioso",
        "ganhos": ["Itens de Papelaria 2"],
        "ganhos-livres": ["+2 PM"]
      },
      {
        "conduta": "alopata",
        "titulo": "Alopata",
        "ganhos": ["Conjuntos Alopáticos 2"],
        "ganhos-livres": ["+2 PM"]
      },
      {
        "conduta": "inspetor",
        "titulo": "Inspetor",
        "ganhos": ["Objetos de Arqueometria 2"],
        "ganhos-livres": ["+2 PM"]
      },
      {
        "conduta": "alquimista",
        "titulo": "Alquimista",
        "ganhos": ["Reagentes Alquímicos 2"],
        "ganhos-livres": ["+2 PM"]
      },
      {
        "conduta": "inventor",
        "titulo": "Inventor",
        "ganhos": ["Dispositivos Mecânicos 2"],
        "ganhos-livres": ["+2 PM"]
      },
      {
        "conduta": "mestreDeVislumbre",
        "titulo": "Mestre de Vislumbre",
        "ganhos": ["Artefatos & Relicários 2"],
        "ganhos-livres": ["+2 PM"]
      },
    ],
    "riqueza": [
      {
        "conduta": "aristocrata",
        "titulo": "Aristocrata",
        "ganhos": ["Armas Simples 1", "Papelaria 1"],
        "ganhos-livres": ["+2 PM"]

      },
      {
        "conduta": "abastado",
        "titulo": "Abastado",
        "ganhos": [],
        "ganhos-livres": ["+4 PM"]

      },
      {
        "conduta": "servoDeHonra",
        "titulo": "Servo de Honra",
        "ganhos": ["Veículo 1", "Papelaria 1"],
        "ganhos-livres": ["+2 PM"]
      },
    ],
    "crime": [
      {
        "conduta": "cacadorDeCabecas",
        "titulo": "Caçador de Cabeças",
        "ganhos": ["Armas Simples 2"],
        "ganhos-livres": ["+2 PM"]
      },
      {
        "conduta": "ladrao",
        "titulo": "Ladrão",
        "ganhos": ["Apetrechos de Ladroagem 2"],
        "ganhos-livres": ["+2 PM"]
      },
      {
        "conduta": "trapaceiro",
        "titulo": "Trapaceiro",
        "ganhos": ["Itens de Papelaria 1"],
        "ganhos-livres": ["+4 PM"]
      },
      {
        "conduta": "pirata",
        "titulo": "Pirata",
        "ganhos": ["Veículo 2"],
        "ganhos-livres": ["+2 PM"]
      },
      {
        "conduta": "contrabandista",
        "titulo": "Contrabandista",
        "ganhos": ["Veículo 1", "Apetrechos de Ladroagem 1"],
        "ganhos-livres": ["+2 PM"]
      },
      {
        "conduta": "falsificador",
        "titulo": "Falsificador",
        "ganhos": ["3 PM em Papelarias"],
        "ganhos-livres": ["+2 PM"]
      }
    ],
    "natureza": [
      {
        "conduta": "eremita",
        "titulo": "Eremita",
        "ganhos": ["Provisões de Sobrevivência 3"],
        "ganhos-livres": []
      },
      {
        "conduta": "tribal",
        "titulo": "Tribal",
        "ganhos": ["Provisões de Sobrevivência 1", "Armas Marciais 2"],
        "ganhos-livres": []
      },
      {
        "conduta": "cacadorDaNoite",
        "titulo": "Caçador da Noite",
        "ganhos": ["Armas Simples 1", "Artefatos & Relicários 1", "Provisões de Sobrevivência 1"],
        "ganhos-livres": ["+2 PM"]
      }
    ],
    "oculto": [
      {
        "conduta": "mestreMunkai",
        "titulo": "Mestre Mun'Kai",
        "ganhos": ["Artefatos & Relicários 3"],
        "ganhos-livres": []
      },
      {
        "conduta": "espuria",
        "titulo": "Espúria",
        "ganhos": ["Artefatos & Relicários 2"],
        "ganhos-livres": ["+2 PM"]
      }
    ],
    "sagrado": [
      {
        "conduta": "sacerdote",
        "titulo": "Sacerdote",
        "ganhos": ["Artefatos & Relicários 1", "Itens de Papelaria 1"],
        "ganhos-livres": ["+2 PM"]
      },
      {
        "conduta": "profeta",
        "titulo": "Profeta",
        "ganhos": [],
        "ganhos-livres": ["+4 PM"]
      },
      {
        "conduta": "expurgador",
        "titulo": "Expurgador",
        "ganhos": ["Artefatos & Relicários 3"],
        "ganhos-livres": []
      }
    ],
    "combate": [
      {
        "conduta": "mercenario",
        "titulo": "Mercenário",
        "ganhos": ["Armaduras Simples ou Marciais 2", "Amadura 1"],
        "ganhos-livres": []
      },
      {
        "conduta": "guarda",
        "titulo": "Guarda",
        "ganhos": ["Armas Simples 1", "Armaduras 1", "Escudos 1", "Armas Marciais 1"],
        "ganhos-livres": []
      },
      {
        "conduta": "miliciano",
        "titulo": "Miliciano",
        "ganhos": ["Armas Simples 1", "Armas Marciais 1"],
        "ganhos-livres": ["+2 PM"]
      },
      {
        "conduta": "pincador",
        "titulo": "Pinçador",
        "ganhos": [],
        "ganhos-livres": ["+4 PM"]
      }
    ],
    "arte": [
      {
        "conduta": "menestrel",
        "titulo": "Menestrel",
        "ganhos": ["Instrumentos Musicais 2"],
        "ganhos-livres": ["+2 PM"]
      },
      {
        "conduta": "escritor",
        "titulo": "Escritor",
        "ganhos": ["Itens de Papelaria 2"],
        "ganhos-livres": ["+2 PM"]
      },
      {
        "conduta": "performancer",
        "titulo": "Performancer",
        "ganhos": [],
        "ganhos-livres": ["+4 PM"]
      },
      {
        "conduta": "artifice",
        "titulo": "Artífice",
        "ganhos": ["Ferramentas de Ofício 2"],
        "ganhos-livres": ["+2 PM"]
      }
    ],
    "oficio": [
      {
        "conduta": "extrator",
        "titulo": "Extrator",
        "ganhos": ["Provisões de Sobrevivência 2", "Ferramentas de Ofício 1"],
        "ganhos-livres": ["+2 PM"]
      },
      {
        "conduta": "artesao",
        "titulo": "Artesãos",
        "ganhos": ["Ferramentas de Ofício 3", "Provisões de Sobrevivência 1"],
        "ganhos-livres": []
      },
      {
        "conduta": "servidor",
        "titulo": "Servidor",
        "ganhos": ["Ferramentas de Ofício 2"],
        "ganhos-livres": ["+2 PM"]
      }
    ]
  }

  const jornadas = {
    "erudicao": "8 Graduações para Habilidades de Erudição",
    "riqueza": "8 Graduação para Habilidades de Influência ou Liderança",
    "crime": "8 Graduações para habilidades de Sagacidade",
    "natureza": "4 Graduações para Habilidade de Técnica e Sagacidade",
    "oculto": "4 Graduações para habilidades de Agudeza e Técnicas",
    "sagrado": "4 Graduações para habilidades de Agudeza e Erudição",
    "combate": "8 Graduações para habilidades de Combate ou Liderança",
    "arte": "8 Graduações para habilidades de Influência ou Técnicas",
    "oficio": "8 Graduações em Habilidades Técnicas"
  }

  switch (tipo) {
    case "condutas": return condutas[nome];
    case "jornadas": return jornadas[nome];
    default:
      break;
  }
}
