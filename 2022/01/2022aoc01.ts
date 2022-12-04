console.log("TEST")

import path from 'path';
import fs from 'fs';

let input: any = fs.readFileSync(path.join(__dirname, '../01/input01.txt'), 'utf-8');
input = input.split('\n')

let mostCalories = 0
let most2 = 0
let most3 = 0
let currentCalories = 0
for (let i of input) {
    if (i != '')
        currentCalories += parseInt(i)
    else {

        if (currentCalories > mostCalories) {
            most3 = most2
            most2 = mostCalories
            mostCalories = currentCalories

        } else {
            if (currentCalories > most2) {
                most3 = most2
                most2 = currentCalories
            } else {
                if (currentCalories > most3) {
                    most3 = currentCalories
                }
            }
        }
        currentCalories = 0
    }
}

console.log(mostCalories + most2 + most3)