'use strict'

// first I am going to declar a function that takes the student grades and the max grade

function americanGradeCalculator(studentGrade,maxGrade){

    // here I will declare a variable to calculate the persentge grade 

    let percentage = (studentGrade/maxGrade) * 100;

    // I will use switch statment  so in every case the grade will give a defiirent percentage based on the student grade

    switch(true){
        case percentage >= 90: // from 90 to 100 it should return A then we break and go to next case
            return `You got a A ( ${percentage} %)!`;
            break;
        case percentage >= 80:
            return `You got a B ( ${percentage} %)!`;
            break;
        case percentage >= 70:
            return `You got a C ( ${percentage} %)!`;
            break;
        case percentage >= 60:
            return `You got a D ( ${percentage} %)!`;
            break;
        case percentage >= 50:
            return `You got a E ( ${percentage} %)!`;
            break;
        case percentage >= 0:
            return `You got a F ( ${percentage} %)!`; 
            break;
        default: // here in case somone put a number that is not in tha cases it will show this message
            return "Please Enter A Valid Grade!";
            break;
    }
}
/* thanks to ianu he teached us how to writ the string in this way(`You got a F ( ${percentage} %)!`; ) 
better than putting a lot of + inside it */