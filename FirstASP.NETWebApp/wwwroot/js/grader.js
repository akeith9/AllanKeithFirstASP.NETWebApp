var submit = document.getElementById("submit");


submit.addEventListener("click", function () {
    var grade;
    var letter;
    grade = (parseInt(document.getElementById("assignments").value) * .5) +
        (parseInt(document.getElementById("group").value) * .1) +
        (parseInt(document.getElementById("quizzes").value) * .1) +
        (parseInt(document.getElementById("exams").value) * .2) +
        (parseInt(document.getElementById("intex").value) * .1);
    switch (true) {
        case (grade >= 94):
            letter = "A";
            break;
        case (grade < 94 && grade >= 90):
            letter = "A-";
            break;
        case (grade < 90 && grade >= 87):
            letter = "B+";
            break;
        case (grade < 87 && grade >= 84):
            letter = "B";
            break;
        case (grade < 84 && grade >= 80):
            letter = "B-";
            break;
        case (grade < 80 && grade >= 77):
            letter = "C+";
            break;
        case (grade < 77 && grade >= 74):
            letter = "C";
            break;
        case (grade < 74 && grade >= 70):
            letter = "C-";
            break;
        case (grade < 70 && grade >= 67):
            letter = "D+";
            break;
        case (grade < 67 && grade >= 64):
            letter = "D";
            break;
        case (grade < 64 && grade >= 60):
            letter = "D-";
            break;
        default:
            letter = "E";
    }
    alert("Your overall score is " + grade + " and your letter grade is " + letter);
});