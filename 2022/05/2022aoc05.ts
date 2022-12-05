import path from 'path';
import fs from 'fs';


let input: any = fs.readFileSync(path.join(__dirname, '../05/input05.txt'), 'utf-8');


let test = input.split('\n')
let movesStart = test.findIndex((x: string) => x === '')

let storage: any = { key: [] }

for (let cargo = 0; cargo < movesStart - 1; cargo++) {
    let s = test[cargo]
    for (let line of s.split('\n')) {
        for (let i = 0; i < line.length; i++) {
            if (line[i] !== ' ' && line[i] !== '[' && line[i] !== ']') {
                let numberLine = (i + 3) / 4
                if (storage[numberLine] === undefined) {
                    storage[numberLine] = []
                }
                let ar = storage[numberLine]
                ar.push(line[i])
                storage[numberLine] = ar

            }
        }
    }
}

// 1 star 

// for (let instruction = movesStart + 1; instruction < test.length; instruction++) {
//     let instructionLine = test[instruction]
//     instructionLine = instructionLine.split(' ')

//     let move = instructionLine[1]
//     let from = instructionLine[3]
//     let to = instructionLine[5]
//     let transport = storage[from].slice(0, move)
//     let ts = storage[from].splice(0, move)
//     storage[to] = transport.reverse().concat(storage[to])
// }

// let ans = []
// for (let key in storage) {
//     let ar = storage[key]
//     if (ar[0] !== undefined)
//         ans += ar[0]
// }
// console.log(ans)



// 2 star
console.log(storage)

for (let instruction = movesStart + 1; instruction < test.length; instruction++) {
    let instructionLine = test[instruction]
    instructionLine = instructionLine.split(' ')

    let move = instructionLine[1]
    let from = instructionLine[3]
    let to = instructionLine[5]
    let transport = storage[from].slice(0, move)
    let ts = storage[from].splice(0, move)
    storage[to] = transport.concat(storage[to])
}
let ans2 = []
for (let key in storage) {
    let ar = storage[key]
    if (ar[0] !== undefined)
        ans2 += ar[0]
}
console.log(ans2)