import * as random from 'random';
var _pj;
var a, bbpp, beat, best, bpp, centrifuge, centripete, i, j, length, limit, m, mScore, moves, numMeta, numPre, output, p, pScore, pp, rps, soma;
function _pj_snippets(container) {
    function in_es6(left, right) {
        if (((right instanceof Array) || ((typeof right) === "string"))) {
            return (right.indexOf(left) > (- 1));
        } else {
            if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                return right.has(left);
            } else {
                return (left in right);
            }
        }
    }
    container["in_es6"] = in_es6;
    return container;
}
_pj = {};
_pj_snippets(_pj);
numPre = 30;
numMeta = 6;
if ((! input)) {
    limit = 8;
    beat = {"R": "P", "P": "S", "S": "R"};
    moves = ["", "", "", ""];
    pScore = [([5] * numPre), ([5] * numPre), ([5] * numPre), ([5] * numPre), ([5] * numPre), ([5] * numPre)];
    centrifuge = {"RP": 0, "PS": 1, "SR": 2, "PR": 3, "SP": 4, "RS": 5, "RR": 6, "PP": 7, "SS": 8};
    centripete = {"R": 0, "P": 1, "S": 2};
    soma = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    rps = [1, 1, 1];
    a = "RPS";
    best = [0, 0, 0];
    length = 0;
    p = ([random.choice("RPS")] * numPre);
    m = ([random.choice("RPS")] * numMeta);
    mScore = [5, 2, 5, 2, 4, 2];
} else {
    for (var i = 0, _pj_a = numPre; (i < _pj_a); i += 1) {
        pp = p[i];
        bpp = beat[pp];
        bbpp = beat[bpp];
        pScore[0][i] = ((0.9 * pScore[0][i]) + (((input === pp) - (input === bbpp)) * 3));
        pScore[1][i] = ((0.9 * pScore[1][i]) + (((output === pp) - (output === bbpp)) * 3));
        pScore[2][i] = ((((0.87 * pScore[2][i]) + ((input === pp) * 3.3)) - ((input === bpp) * 1.2)) - ((input === bbpp) * 2.3));
        pScore[3][i] = ((((0.87 * pScore[3][i]) + ((output === pp) * 3.3)) - ((output === bpp) * 1.2)) - ((output === bbpp) * 2.3));
        pScore[4][i] = ((pScore[4][i] + ((input === pp) * 3)) * (1 - (input === bbpp)));
        pScore[5][i] = ((pScore[5][i] + ((output === pp) * 3)) * (1 - (output === bbpp)));
    }
    for (var i = 0, _pj_a = numMeta; (i < _pj_a); i += 1) {
        mScore[i] = (0.96 * ((mScore[i] + (input === m[i])) - (input === beat[beat[m[i]]])));
    }
    soma[centrifuge[(input + output)]] += 1;
    rps[centripete[input]] += 1;
    moves[0] += centrifuge[(input + output)].toString();
    moves[1] += input;
    moves[2] += output;
    length += 1;
    for (var y = 0, _pj_a = 3; (y < _pj_a); y += 1) {
        j = min([length, limit]);
        while (((j >= 1) && (! _pj.in_es6(moves[y].slice((length - j), length), moves[y].slice(0, (length - 1)))))) {
            j -= 1;
        }
        i = moves[y].rfind(moves[y].slice((length - j), length), 0, (length - 1));
        p[(0 + (2 * y))] = moves[1][(j + i)];
        p[(1 + (2 * y))] = beat[moves[2][(j + i)]];
    }
    j = min([length, limit]);
    while (((j >= 2) && (! _pj.in_es6(moves[0].slice((length - j), (length - 1)), moves[0].slice(0, (length - 2)))))) {
        j -= 1;
    }
    i = moves[0].rfind(moves[0].slice((length - j), (length - 1)), 0, (length - 2));
    if (((j + i) >= length)) {
        p[6] = p[7] = random.choice("RPS");
    } else {
        p[6] = moves[1][(j + i)];
        p[7] = beat[moves[2][(j + i)]];
    }
    best[0] = ((soma[centrifuge[(output + "R")]] * rps[0]) / rps[centripete[output]]);
    best[1] = ((soma[centrifuge[(output + "P")]] * rps[1]) / rps[centripete[output]]);
    best[2] = ((soma[centrifuge[(output + "S")]] * rps[2]) / rps[centripete[output]]);
    p[8] = p[9] = a[best.index(max(best))];
    for (var i = 10, _pj_a = numPre; (i < _pj_a); i += 1) {
        p[i] = beat[beat[p[(i - 10)]]];
    }
    for (var i = 0, _pj_a = numMeta; (i < _pj_a); i += 2) {
        m[i] = p[pScore[i].index(max(pScore[i]))];
        m[(i + 1)] = beat[p[pScore[(i + 1)].index(max(pScore[(i + 1)]))]];
    }
}
output = beat[m[mScore.index(max(mScore))]];
if (((max(mScore) < 0.07) || (random.randint(3, 40) > length))) {
    output = beat[random.choice("RPS")];
}

//# sourceMappingURL=RPSAlgorithm1.js.map
