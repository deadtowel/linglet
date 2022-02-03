export interface ITerm {
  term: string,
  definition: string,
  id: string,
}

export interface ISet {
  title: string,
  description: string,
  id: number,
  termCards: number,
}

export type TSetInputValidation = {
  title: boolean;
  description: boolean;
};