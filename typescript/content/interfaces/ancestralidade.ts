import Content from "./_content";

interface ContentAncestralidade extends Content {
  viciosMax: number;
  categoriasPossiveis: string[];
  virtudes: string[];
  vicios: string[];
  tracos: string[];
  condutasBloqueadas: string[];
  vivencia: {
    expectativa: string;
    infanteMax: number;
    jovemMax: number;
    maduroMax: number;
  };
}

export default ContentAncestralidade;