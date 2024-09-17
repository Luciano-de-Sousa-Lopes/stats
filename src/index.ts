import { CsvFileReader } from "./CsvFileReader";
import { MatchResultEnum } from "./MatchResult.enum";

const csvFileReader = new CsvFileReader("football.csv");
csvFileReader.read();
const matches: string[][] = csvFileReader.data;

let manUnitedWins = 0;

for (let match of matches) {
  if (
    (match[1] === "Man United" && match[5] === MatchResultEnum.HomeWins) ||
    (match[2] === "Man United" && match[5] === MatchResultEnum.AwayWins)
  ) {
    manUnitedWins++;
  }
}

console.log(`Man united won ${manUnitedWins} games`);
