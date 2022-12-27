import { LandingStance } from "./LandingStance";
import { Transition } from "./Transition";
import { Trick } from "./Trick";

export interface TrickCombo {
  readonly trick: Trick,
  readonly transition: Transition,
  readonly landingStance: LandingStance,
  readonly nextTrick?: TrickCombo,
  readonly prevTrick?: TrickCombo,
  // TODO Figure out datastructure for video, is it just a url? 
  readonly clip?: any
}