export default function contentJornada(tipo, nome) {
  const condutas = {
    "erudicao": [
      {
        "conduta": "professor",
        "titulo": "Professor/Estudioso",
        "ganhos": "3 PM em Papelarias"
      },
      {
        "conduta": "alopata",
        "titulo": "Alopata",
        "ganhos": "3 PM em Alopáticos"
      },
      {
        "conduta": "inspetor",
        "titulo": "Inspetor",
        "ganhos": "2 PM Livres"
      },
      {
        "conduta": "alquimista",
        "titulo": "Alquimista",
        "ganhos": "3 PM em Alquímicos"
      },
      {
        "conduta": "inventor",
        "titulo": "Inventor",
        "ganhos": "3 PM em Mecânicos"
      },
      {
        "conduta": "mestreDeVislumbres",
        "titulo": "Mestre de Vislumbres",
        "ganhos": "3 PM em Arqueômetros"
      },
    ],

    "riqueza": [
      {
        "conduta": "aristocrata",
        "titulo": "Aristocrata",
        "ganhos": "1 PM em papelaria, 1 PM em Veículo e 1 PM armas simples"

      },
      {
        "conduta": "abastado",
        "titulo": "Abastado",
        "ganhos": "2 PM Livres"

      },
      {
        "conduta": "servoDeHonra",
        "titulo": "Servo de Honra",
        "ganhos": "1 PM em Armas Simples, 1 PM em Veículos e 1 PM em Papelarias"
      },
    ],

    "crime": [
      {
        "conduta": "cacadorDeCabecas",
        "titulo": "Caçador de Cabeças",
        "ganhos": "3 PM em Armas Simples"
      },
      {
        "conduta": "ladrao",
        "titulo": "Ladrão",
        "ganhos": "2 PM Livres"
      },
      {
        "conduta": "pirata",
        "titulo": "Pirata",
        "ganhos": "3 PM em Veículos"
      },
      {
        "conduta": "contrabandista",
        "titulo": "Contrabandista",
        "ganhos": "1 PM em Veículos e 1 PM em Apetrechos"
      },
      {
        "conduta": "falsificador",
        "titulo": "Falsificador",
        "ganhos": "3 PM em Papelarias"
      }
    ],

    "natureza": [
      {
        "conduta": "eremita",
        "titulo": "Eremita",
        "ganhos": "3 PM em Survivalistas"
      },
      {
        "conduta": "tribal",
        "titulo": "Tribal",
        "ganhos": "1 PM em Survivalista, 1 PM em Alopáticos e 1 PM em Relicários"
      },
      {
        "conduta": "cacadorDaNoite",
        "titulo": "Caçador da Noite",
        "ganhos": "3 PM em Relicários"
      }
    ],

    "oculto": [
      {
        "conduta": "munkai",
        "titulo": "Mun'Kai",
        "ganhos": "3 PM em Relicários"
      },
      {
        "conduta": "espurias",
        "titulo": "Espúrias",
        "ganhos": "3 PM em Relicários"
      }
    ],

    "sagrado": [
      {
        "conduta": "sacerdote",
        "titulo": "Sacerdote",
        "ganhos": "3 PM em Relicários"
      },
      {
        "conduta": "profeta",
        "titulo": "Profeta",
        "ganhos": "2 PM Livres"
      }
    ],

    "combate": [
      {
        "conduta": "mercenarios",
        "titulo": "Mercenários",
        "ganhos": "3 PM em Armas"
      },
      {
        "conduta": "guardas",
        "titulo": "Guardas",
        "ganhos": "1 PM em Armas Marciais, 1 PM em Escudos e 1 PM em Armaduras"
      },
      {
        "conduta": "miliciano",
        "titulo": "Miliciano",
        "ganhos": "2 PM Livres"
      },
      {
        "conduta": "pinceiro",
        "titulo": "Pinceiro",
        "ganhos": "1 PM em Armas Simples, 1 PM em Ferramentas e 1 PM em Apetrechos"
      }
    ],

    "arte": [
      {
        "conduta": "menestreis",
        "titulo": "Menestréis",
        "ganhos": "3 PM em Instrumentos"
      },
      {
        "conduta": "escritores",
        "titulo": "Escritores",
        "ganhos": "3 PM em Papelarias"
      },
      {
        "conduta": "performance",
        "titulo": "Performance",
        "ganhos": "1 PM em Instrumento, 1 PM em ferramentas e 1 PM em armas simples"
      },
      {
        "conduta": "artifice",
        "titulo": "Artífice",
        "ganhos": "3 PM em ferramentas"
      }
    ],

    "oficio": [
      {
        "conduta": "extratores",
        "titulo": "Extratores",
        "ganhos": "3 PM em Survivalistas"
      },
      {
        "conduta": "artesaos",
        "titulo": "Artesãos",
        "ganhos": "3 PM em ferramentas"
      },
      {
        "conduta": "servidores",
        "titulo": "Servidores",
        "ganhos": "2 PM Livres"
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
