"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const MatchResult_enum_1 = require("../MatchResult.enum");
class WinsAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let wins = 0;
        for (let match of matches) {
            if ((match[1] === "Man United" && match[5] === MatchResult_enum_1.MatchResultEnum.HomeWins) ||
                (match[2] === "Man United" && match[5] === MatchResult_enum_1.MatchResultEnum.AwayWins)) {
                wins++;
            }
        }
        return `Team ${this.team} won ${wins} games`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
