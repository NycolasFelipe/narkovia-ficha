export default function contentConduta(conduta) {
  const condutas = {
    "erudicao": [
      {
        "conduta": "professor",
        "titulo": "Professor/Estudioso",
        "ganhos": ["Itens de Papelaria", "+4G (Erudição)"]
      },
      {
        "conduta": "alopata",
        "titulo": "Alopata",
        "ganhos": ["Conjuntos Alopáticos", "+4G (Erudição)"]
      },
      {
        "conduta": "inspetor",
        "titulo": "Inspetor",
        "ganhos": ["Objetos de Arqueometria", "+4G (Técnica ou Agudeza)"]
      },
      {
        "conduta": "alquimista",
        "titulo": "Alquimista",
        "ganhos": ["Reagentes Alquímicos", "+4G (Erudição)"],
      },
      {
        "conduta": "inventor",
        "titulo": "Inventor",
        "ganhos": ["Dispositivos Mecânicos", "+4G (Erudição)"]
      },
      {
        "conduta": "mestre de vislumbres",
        "titulo": "Mestre de Vislumbres",
        "ganhos": ["Especialidade: Joia de Pulso", "+4G (Técnica ou Agudeza)"]
      },
    ],
    "riqueza": [
      {
        "conduta": "aristocrata",
        "titulo": "Aristocrata",
        "ganhos": ["Especialidade: Heráldica", "+2G (Agudeza)", "+2G (Liderança)"]

      },
      {
        "conduta": "abastado",
        "titulo": "Abastado",
        "ganhos": ["Itens de Papelaria", "+4G (Influência ou Liderança)"]

      },
      {
        "conduta": "servo de honra",
        "titulo": "Servo de Honra",
        "ganhos": ["Veículo", "+4G (Influência ou Técnica)"]
      },
    ],
    "crime": [
      {
        "conduta": "cacador de cabecas",
        "titulo": "Caçador de Cabeças",
        "ganhos": ["Armas Simples", "+2G (Combate)", "+2G (Técnica)"]
      },
      {
        "conduta": "ladrao",
        "titulo": "Ladrão",
        "ganhos": ["Apetrechos de Ladroagem", "+4G (Sagacidade)"]
      },
      {
        "conduta": "trapaceiro",
        "titulo": "Trapaceiro",
        "ganhos": ["Itens de Papelaria", "+4G (Influência ou Sagacidade)"]
      },
      {
        "conduta": "pirata",
        "titulo": "Pirata",
        "ganhos": ["Especialidade: Navios", "+2G (Combate)", "+2G (Sagacidade)"]
      },
      {
        "conduta": "contrabandista",
        "titulo": "Contrabandista",
        "ganhos": ["Veículo 1", "Apetrechos de Ladroagem 1"]
      },
      {
        "conduta": "falsificador",
        "titulo": "Falsificador",
        "ganhos": ["Especialidade: Documentos ou Bens de Valor", "+4G (Técnica ou Agudeza)"]
      }
    ],
    "natureza": [
      {
        "conduta": "eremita",
        "titulo": "Eremita",
        "ganhos": ["Provisões de Sobrevivência", "+4G (Técnica ou Agudeza)"]
      },
      {
        "conduta": "tribal",
        "titulo": "Tribal",
        "ganhos": ["Especialidade: Cultura Miraniana", "+4G (Técnica ou Combate)"]
      },
      {
        "conduta": "cacador da noite",
        "titulo": "Caçador da Noite",
        "ganhos": ["Artefatos & Relicários", "+4G (Técnica ou Sagacidade)"]
      }
    ],
    "oculto": [
      {
        "conduta": "munkai",
        "titulo": "Mestre Mun'Kai",
        "ganhos": ["Especialidade: Penduricalhos", "+4G (Técnica ou Agudeza)"]
      },
      {
        "conduta": "espuria",
        "titulo": "Espúria",
        "ganhos": ["Especialidade: Miasma", "+4G (Técnica ou Agudeza)"]
      }
    ],
    "sagrado": [
      {
        "conduta": "sacerdote",
        "titulo": "Sacerdote",
        "ganhos": ["Especialidade: Igreja de Absolan", "+4G (Técnica ou Influência)"]
      },
      {
        "conduta": "profeta",
        "titulo": "Profeta",
        "ganhos": ["Especialidade: Brilho", "+4G (Técnica ou Sagacidade)"]
      },
      {
        "conduta": "expurgador",
        "titulo": "Expurgador",
        "ganhos": ["Artefatos & Relicários", "+4G (Combate ou Técnica)"]
      }
    ],
    "combate": [
      {
        "conduta": "mercenario",
        "titulo": "Mercenário",
        "ganhos": ["Armas Marciais", "+4G (Combate ou Sagacidade)"]
      },
      {
        "conduta": "guarda",
        "titulo": "Guarda",
        "ganhos": ["Armaduras", "+4G (Combate ou Liderança)"]
      },
      {
        "conduta": "miliciano",
        "titulo": "Miliciano",
        "ganhos": ["Armas Simples", "+4G (Combate ou Influência)"]
      },
      {
        "conduta": "pincador",
        "titulo": "Pinçador",
        "ganhos": ["Especialidade: Pinças", "+4G (Combate ou Técnica)"]
      }
    ],
    "arte": [
      {
        "conduta": "menestrel",
        "titulo": "Menestrel",
        "ganhos": ["Instrumentos Musicais", "+4G (Influência ou Técnica)"]
      },
      {
        "conduta": "escritor",
        "titulo": "Escritor",
        "ganhos": ["Itens de Papelaria", "+2G (Agudeza)", "+2G (Influência)"]
      },
      {
        "conduta": "performancer",
        "titulo": "Performancer",
        "ganhos": ["Especialidade: Alguma manifestação artística corporal", "+4G (Influência ou Liderança)"]
      },
      {
        "conduta": "artifice",
        "titulo": "Artífice",
        "ganhos": ["Ferramentas de Ofício", "+2G (Técnica)", "+2G (Influência)"]
      }
    ],
    "oficio": [
      {
        "conduta": "extrator",
        "titulo": "Extrator",
        "ganhos": ["Provisões de Sobrevivência", "+2G (Sagacidade)", "+2G (Técnica)"]
      },
      {
        "conduta": "artesao",
        "titulo": "Artesãos",
        "ganhos": ["Ferramentas de Ofício", "+4G (Técnica ou Sagacidade)"]
      },
      {
        "conduta": "servidor",
        "titulo": "Servidor",
        "ganhos": ["Especialidade: Economia", "+4G (Influência ou Agudeza)"]
      }
    ]
  }

  const condutaEscolhida = condutas[conduta];
  if (condutaEscolhida === undefined) {
    const errorMsg = `Erro: conduta "${conduta}" inválida.`;
    console.log(errorMsg);
    return [{ "conduta": "conduta_invalida" }];
  } else {
    return condutaEscolhida;
  }
}
