/**
 * Utils class for getting a readable string for TrickUtils (tbh this might be a frontend only thing)
 */
export class TrickUtils {
  /**
 * Maps numerical difficulty rank to a readable string
 * @param rank numerical difficulty rank
 */
  public static getDifficultyRankingString = (rank: number): string | undefined => {
    if (rank >= 0 && rank < 25) {
      return 'Beginner';
    } else if (rank >= 25 && rank < 50) {
      return 'Intermediate';
    } else if (rank >= 50 && rank < 75) {
      return 'Advanced';
    } else if (rank >= 75 && rank <= 100) {
      return 'Expert';
    } else if (rank > 100) {
      return 'Pro';
    }
    return undefined;
  }
}
