export interface ITerm {
  term: string,
  definition: string,
  example: string,
  id: string,
}

export interface ISet {
  title: string,
  description: string,
  id: string,
  termCards: ITerm[],
}

export interface TermFormsValues {
  title: string;
  description: string;
  termForms: ITerm[];
}