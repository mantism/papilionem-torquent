import { Session } from "./Session";
import { Trick } from "./Trick";
import { TrickCombo } from "./TrickCombo";

export interface User {
  firstName: string,
	lastName: string,
	// must be unique
	username: string,
	// must be unique
	email: string,
	birthday: Date,
	trickingYear: number,
  // Tricks
  // map from list title -> list of tricks
	trickListsMap: Map<string, Array<Trick>>
  trickNameToCount: Map<string, number>,
  favoriteTricks: Set<Trick>,
	// combo map, combo name -> combo, default combo names are combo 1, 2, 3..
	comboMap: Map<string, TrickCombo>,
  favoriteCombos: Array<TrickCombo>,
  // Sessions
	sessionsMap: Map<Date, Array<Session>>,
}
