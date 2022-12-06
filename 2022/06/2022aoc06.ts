import path from 'path';
import fs from 'fs';


let input: any = fs.readFileSync(path.join(__dirname, '../06/input06.txt'), 'utf-8');

// let iteration = 0
// let fourChars: string[] = []
// for (let char of input) {
//     iteration++
//     fourChars.push(char)
//     console.log(fourChars)
//     if (fourChars.length > 4)
//         fourChars.shift()
//     else
//         continue

//     const noDups = new Set(fourChars)
//     if (fourChars.length === noDups.size) {
//         console.log(iteration)
//         break
//     }
// }


// star 2
let iteration = 0
let fourChars: string[] = []
for (let char of input) {
    iteration++
    fourChars.push(char)
    console.log(fourChars)
    if (fourChars.length > 14)
        fourChars.shift()
    else
        continue

    const noDups = new Set(fourChars)
    if (fourChars.length === noDups.size) {
        console.log(iteration)
        break
    }
}