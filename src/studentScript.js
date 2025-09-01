class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculate() {
        let grade;
        if (this.marks >= 90) {
            grade = "Grade A";
        } else if (this.marks >= 75) {
            grade = "Grade B";
        } else {
            grade = "Grade C";
        }
        return `Name: ${this.name} <br>
                Marks: ${this.marks} <br>
                Result: ${grade}`;
    }
}

function getGrade() {
    let name = document.getElementById("name").value.trim();
    let marks = document.getElementById("marks").value.trim();
    if (!name || !marks) {
        alert("Please fill all the fields to continue");
        return;
    }
    marks = Number(marks);
    let obj = new Student(name, marks);
    document.getElementById("grades").innerHTML = obj.calculate();
}