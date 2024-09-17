"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchResult_enum_1 = require("./MatchResult.enum");
const csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
csvFileReader.read();
const matches = csvFileReader.data;
let manUnitedWins = 0;
for (let match of matches) {
    if ((match[1] === "Man United" && match[5] === MatchResult_enum_1.MatchResultEnum.HomeWins) ||
        (match[2] === "Man United" && match[5] === MatchResult_enum_1.MatchResultEnum.AwayWins)) {
        manUnitedWins++;
    }
}
console.log(`Man united won ${manUnitedWins} games`);
