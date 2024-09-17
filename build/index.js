"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const MatchData_1 = require("./MatchData");
const matches = fs_1.default
    .readFileSync("football.csv", { encoding: "utf-8" })
    .split("\n")
    .map((row) => {
    return row.split(",");
});
let manUnitedWins = 0;
for (let match of matches) {
    if ((match[1] === "Man United" && match[5] === MatchData_1.MatchData.HomeWins) ||
        (match[2] === "Man United" && match[5] === MatchData_1.MatchData.AwayWins)) {
        manUnitedWins++;
    }
}
console.log(`Man united won ${manUnitedWins} games`);
