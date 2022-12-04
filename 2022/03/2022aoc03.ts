import path from 'path';
import fs from 'fs';

let input: any = fs.readFileSync(path.join(__dirname, '../03/input03.txt'), 'utf-8');
input = input.split('\n')

const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Part 1
let points = 0
for (let ruc of input) {
    const numOfItems = ruc.length
    const com1 = ruc.slice(0, numOfItems / 2)
    const com2 = ruc.slice(numOfItems / 2, numOfItems)

    for (let item of com1) {
        if (com2.includes(item)) {

            const position = letters.indexOf(item.toLowerCase()) + 1;

            if (item.toUpperCase() === item)
                points += position + 26
            else
                points += position
            break
        }
    }
    //console.log(com1, com2)
}

// Part 2
let points2 = 0
let loopNumStart = 0
let loopNumEnd = 3
for (let n of input) {

    const ruc = input.slice(loopNumStart, loopNumEnd)
    if (!ruc[0]) break

    for (let item of ruc[0]) {
        if (ruc[1].includes(item)) {
            if (ruc[2].includes(item)) {
                const position = letters.indexOf(item.toLowerCase()) + 1;

                if (item.toUpperCase() === item)
                    points2 += position + 26
                else
                    points2 += position
                break
            }
        }
    }
    loopNumStart += 3
    loopNumEnd += 3
}

console.log(points2)