import path from 'path';
import fs from 'fs';

let input: any = fs.readFileSync(path.join(__dirname, '../02/input02.txt'), 'utf-8');
input = input.split('\n')

let totalScore = 0

// X = lose 
// Y = draw
// Z = win
for (let game of input) {
    let gameScore = 0
    let handScore = 0
    console.log(game[2], game[0])

    if (game[2] === 'X') {
        handScore = 1 // rock

        if (game[0] === "A")
            gameScore = 3
        else if (game[0] === "B")
            gameScore = 0
        else if (game[0] === "C")
            gameScore = 6
    }
    else if (game[2] === 'Y') {
        handScore = 2 // paper

        if (game[0] === "A")
            gameScore = 6
        else if (game[0] === "B")
            gameScore = 3
        else if (game[0] === "C")
            gameScore = 0
    }
    else if (game[2] === 'Z') {
        handScore = 3 // scissors

        if (game[0] === "A")
            gameScore = 0
        else if (game[0] === "B")
            gameScore = 6
        else if (game[0] === "C")
            gameScore = 3
    }
    totalScore = totalScore + gameScore + handScore
}

totalScore = 0

for (let game of input) {
    let gameScore = 0
    let handScore = 0

    if (game[2] === 'X') {
        handScore = 0 // lose

        if (game[0] === "A") // rock
            gameScore = 3
        else if (game[0] === "B") // paper
            gameScore = 1
        else if (game[0] === "C") // scissors
            gameScore = 2
    }
    else if (game[2] === 'Y') {
        handScore = 3 // draw

        if (game[0] === "A")
            gameScore = 1
        else if (game[0] === "B")
            gameScore = 2
        else if (game[0] === "C")
            gameScore = 3
    }
    else if (game[2] === 'Z') {
        handScore = 6 // win

        if (game[0] === "A")
            gameScore = 2
        else if (game[0] === "B")
            gameScore = 3
        else if (game[0] === "C")
            gameScore = 1
    }
    totalScore = totalScore + gameScore + handScore
}
console.log(totalScore)