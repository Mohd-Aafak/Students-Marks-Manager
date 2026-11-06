
const addBtn = document.getElementById("add-std");
const stdInput = document.getElementById("std-input");
const mrkInput = document.getElementById("mrk-input");
const stdShow = document.querySelector(".stdShow-container");
const stdValue = document.getElementById("std-value");
const avgStudent = document.getElementById("avg-value");

let totalStudent = 0;
let avg = 0;
let totalMarks = 0;

addBtn.addEventListener("click", function () {
    if (stdInput.value.trim() === "" || mrkInput.value.trim() === "") {
        alert("Please enter student name and marks");
        return;
    }

    let Grade = "";
    let studentName = stdInput.value.trim();
    let studentMarks = Number(mrkInput.value.trim());

    if (studentMarks < 0 || studentMarks > 100 || !Number.isFinite(studentMarks)) {
        alert("Please enter marks between 0 and 100");
        return;
    }

    if (studentMarks >= 90) {
        Grade = "A";
    } else if (studentMarks >= 75) {
        Grade = "B";
    } else if (studentMarks >= 60) {
        Grade = "C";
    } else if (studentMarks >= 40) {
        Grade = "D";
    } else {
        Grade = "F";
    }

    const stdCard = document.createElement("div");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    const nameSpan = document.createElement("span");
    nameSpan.textContent = `Name: ${studentName} `;
    stdCard.appendChild(nameSpan);

    const marksSpan = document.createElement("span");
    marksSpan.textContent = `Marks: ${studentMarks} `;

    const gradeSpan = document.createElement("span");
    gradeSpan.textContent = `Grade: ${Grade} `;

    stdCard.appendChild(marksSpan);
    stdCard.appendChild(gradeSpan);

    stdCard.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", function () {
        stdCard.remove();

        totalStudent -= 1;
        totalMarks = totalMarks - studentMarks;

        stdValue.textContent = totalStudent;

        if (totalStudent > 0) {
            avg = totalMarks / totalStudent;
            avgStudent.textContent = avg.toFixed(2);
        } else {
            avgStudent.textContent = 0;
        }
    });

    stdCard.appendChild(editBtn);

    editBtn.addEventListener("click", function () {
        let newName = prompt("Enter new student name");

        if (newName === null) {
            return;
        }

        let newMarks = prompt("Enter new marks");

        if (newMarks === null) {
            return;
        }

        newName = newName.trim();
        newMarks = newMarks.trim();

        if (newName === "") {
            alert("Please enter student name");
            return;
        }

        if (newMarks === "" || !Number.isFinite(Number(newMarks))) {
            alert("Please enter valid marks between 0 and 100");
            return;
        }

        newMarks = Number(newMarks);

        if (newMarks < 0 || newMarks > 100) {
            alert("Please enter marks between 0 and 100");
            return;
        }

        if (newName !== "") {
            studentName = newName;
            nameSpan.textContent = `Name: ${studentName} `;
        }

        totalMarks = totalMarks - studentMarks + newMarks;
        studentMarks = newMarks;

        marksSpan.textContent = `Marks: ${studentMarks} `;

        // Grade update
        if (studentMarks >= 90) {
            Grade = "A";
        } else if (studentMarks >= 75) {
            Grade = "B";
        } else if (studentMarks >= 60) {
            Grade = "C";
        } else if (studentMarks >= 40) {
            Grade = "D";
        } else {
            Grade = "F";
        }

        gradeSpan.textContent = `Grade: ${Grade} `;

        // Average update
        avg = totalMarks / totalStudent;
        avgStudent.textContent = avg.toFixed(2);
    });

    stdShow.appendChild(stdCard);

    stdInput.value = "";
    mrkInput.value = "";

    totalStudent += 1;
    totalMarks = totalMarks + studentMarks;

    stdValue.textContent = totalStudent;

    avg = totalMarks / totalStudent;
    avgStudent.textContent = avg.toFixed(2);
});
