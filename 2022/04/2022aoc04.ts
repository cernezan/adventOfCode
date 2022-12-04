import path from 'path';
// @ts-ignore
import fs from 'fs';


let input: any = fs.readFileSync(path.join(__dirname, '../04/input04.txt'), 'utf-8');
input = input.split('\n')

let countsOfOverlap = 0
for (let pairs of input) {
    let pairList = pairs.split(',')
    let part1 = pairList[0].split('-')
    let part2 = pairList[1].split('-')

    if (parseInt(part1[0]) <= parseInt(part2[0])) {
        if (parseInt(part1[1]) >= parseInt(part2[1])) {
            countsOfOverlap++
            continue
        }
    }

    if (parseInt(part1[0]) >= parseInt(part2[0])) {
        if (parseInt(part1[1]) <= parseInt(part2[1])) {
            countsOfOverlap++
        }
    }
}

let countsOfOverlapAny = 0
for (let pairs of input) {
    let pairList = pairs.split(',')
    let part1 = pairList[0].split('-')
    let part2 = pairList[1].split('-')

    console.log(pairList, "m")
    if (parseInt(part1[0]) <= parseInt(part2[0])) {
        if (parseInt(part1[1]) >= parseInt(part2[0])) {
            countsOfOverlapAny++
            continue
        }
    }

    if (parseInt(part1[0]) >= parseInt(part2[0])) {
        if (parseInt(part1[0]) <= parseInt(part2[1])) {
            countsOfOverlapAny++
        }
    }
}
console.log(countsOfOverlapAny)