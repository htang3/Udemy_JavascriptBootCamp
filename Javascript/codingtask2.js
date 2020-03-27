console.log("this.is coding task 2")
var students = [
    {
        name: "John",
        score1: 47,
        score2: 46
    },
    {
        name: "Bob",
        score1: 23,
        score2: 24
    },
    {
        name: "Nick",
        score1: 40,
        score2: 35
    },
    {
        name: "Alex",
        score1: 44,
        score2: 45
    },

]
var degrees = ['A', 'B', 'C', 'D', 'E']
var pass = [91, 81, 71, 61, 51]

function addScore(score1, score2) {
    return score1 + score2;
}

function evaluateStudent(std) {
    var totalScore = addScore(std.score1, std.score2)
    if (totalScore >= pass[0]) {
        console.log(std.name + " passed final exam successfully");
        console.log("He has " + totalScore + " points and he got degree " + degrees[0])
    }
    else if (totalScore >= pass[1]) {
        console.log(std.name + " passed final exam successfully");
        console.log("He has " + totalScore + " points and he got degree " + degrees[1])
    }
    else if (totalScore >= pass[2]) {
        console.log(std.name + " passed final exam successfully");
        console.log("He has " + totalScore + " points and he got degree " + degrees[2])
    }
    else {
        console.log(std.name + " got " + totalScore + " points, has failed and he has to try next year");
    }
}
for (var i = 0; i < students.length; i++) {
    evaluateStudent(students[i]);
    console.log("_________________________")
}

evaluateStudent({ name: 'Hung', score1: 50, score2: 30 });
