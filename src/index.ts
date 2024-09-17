import fs from "fs";
import { MatchData } from "./MatchData";

const matches: string[][] = fs
  .readFileSync("football.csv", { encoding: "utf-8" })
  .split("\n")
  .map((row: string): string[] => {
    return row.split(",");
  });

let manUnitedWins = 0;

for (let match of matches) {
  if (
    (match[1] === "Man United" && match[5] === MatchData.HomeWins) ||
    (match[2] === "Man United" && match[5] === MatchData.AwayWins)
  ) {
    manUnitedWins++;
  }
}

console.log(`Man united won ${manUnitedWins} games`);
