/**
 * Interface for Trick object
 */
export interface Trick {
  readonly name: string,
  // maybe an enum, not sure if necessary
  readonly categories: TrickCategory[],
  // Difficulty rank
  readonly difficultyRank: number,
  readonly prereqs: Array<Trick>,
  readonly nextTricks: Array<Trick>,
  readonly trickersLanded: Array<string>,
  readonly mainVideoUrl: string,
  // bucket for user submitted videos
  readonly s3VideoBucket: string
}

export enum TrickCategory {
  FLIP = 'Flip',
  VERT_KICK = 'Vert Kick',
  TWIST = 'Twist',
  PSEUDO_DUB = 'Pseudo Double Flip',
  SING = 'Single',
  DUB = 'Double',
  TRIP = 'Triple',
  QUAD = 'Quad'
}

