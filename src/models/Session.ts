import { Trick } from "./Trick";
import { TrickCombo } from "./TrickCombo";

export interface Session {
  readonly goals: Array<string>,
  readonly landedTricks: Map<Trick, number>,
  readonly attemptedTricks: Map<Trick, number>,
  readonly gymName: string,
  readonly combos: Array<TrickCombo>,
  // TODO: figure out video dto
  readonly clips: Array<any>,
  readonly date: Date
}