import { MatchData } from "../MatchData";
import { MatchResultEnum } from "../MatchResult.enum";
import { Analyzer } from "../Summary";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      if (
        (match[1] === "Man United" && match[5] === MatchResultEnum.HomeWins) ||
        (match[2] === "Man United" && match[5] === MatchResultEnum.AwayWins)
      ) {
        wins++;
      }
    }
    return `Team ${this.team} won ${wins} games`;
  }
}
