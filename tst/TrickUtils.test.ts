import { TrickUtils } from "../src/utils/TrickUtils";

describe('Trick Utils Test Suite', () => {
  test('Validate correct ranking strings', () => {
    expect(TrickUtils.getDifficultyRankingString(4)).toEqual('Beginner');
    expect(TrickUtils.getDifficultyRankingString(42)).toEqual('Intermediate');
    expect(TrickUtils.getDifficultyRankingString(69)).toEqual('Advanced');
    expect(TrickUtils.getDifficultyRankingString(84)).toEqual('Expert');
    expect(TrickUtils.getDifficultyRankingString(101)).toEqual('Pro');
  });
});