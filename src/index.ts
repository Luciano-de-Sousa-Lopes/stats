import { MatchReader } from "./MatchReader";
import { MatchResultEnum } from "./MatchResult.enum";

const reader = new MatchReader("football.csv");
reader.read();
const matches = reader.data;

let manUnitedWins = 0;

for (let match of matches) {
  if (
    (match[1] === "Man United" && match[5] === MatchResultEnum.HomeWins) ||
    (match[2] === "Man United" && match[5] === MatchResultEnum.AwayWins)
  ) {
    manUnitedWins++;
  }
}

// console.log(matches);
console.log(`Man united won ${manUnitedWins} games`);
