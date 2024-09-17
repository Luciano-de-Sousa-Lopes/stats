"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const MatchResult_enum_1 = require("./MatchResult.enum");
const reader = new MatchReader_1.MatchReader("football.csv");
reader.read();
const matches = reader.data;
let manUnitedWins = 0;
for (let match of matches) {
    if ((match[1] === "Man United" && match[5] === MatchResult_enum_1.MatchResultEnum.HomeWins) ||
        (match[2] === "Man United" && match[5] === MatchResult_enum_1.MatchResultEnum.AwayWins)) {
        manUnitedWins++;
    }
}
// console.log(matches);
console.log(`Man united won ${manUnitedWins} games`);
