/**
 * Exercise: Student Grade Manager
 *
 * Create a system to manage student grades with the following:
 *
 * 1. Define a Student type with:
 *    - id: number
 *    - name: string
 *    - grade: number
 *    - status: "passing" | "failing"
 *
 * 2. Create an array of 3 students (without status — calculate it)
 *
 * 3. Write a function addStudent that:
 *    - takes a name and grade
 *    - automatically assigns an id
 *    - sets status to "passing" if grade >= 60, otherwise "failing"
 *    - adds to the array and returns the new student
 *
 * 4. Write a function getTopStudent that:
 *    - returns the student with the highest grade
 *
 * 5. Write a function updateGrade that:
 *    - takes an id and new grade
 *    - updates the grade and recalculates the status
 *    - returns the updated student
 */

type Student = {
  id: number;
  name: string;
  grade: number;
  status: "passing" | "failing";
};

let nextStudentId = 3941; //starts after existing id of 3940

const students: Student[] = [
  {
    id: 3938,
    name: "Fathimath Zihaa Hussain",
    grade: 90,
    status: 90 >= 60 ? "passing" : "failing",
  },
  {
    id: 3939,
    name: "Aminath Saya Ibrahim",
    grade: 80,
    status: 80 >= 60 ? "passing" : "failing",
  },
  {
    id: 3940,
    name: "Mohamed Anoof Junaid",
    grade: 40,
    status: 40 >= 60 ? "passing" : "failing",
  },
];

// function

function addStudent(newStudent: Omit<Student, "id" | "status">): Student {
  const addNewStudent: Student = {
    id: nextStudentId++,
    ...newStudent,
    status: newStudent.grade >= 60 ? "passing" : "failing",
  };
  students.push(addNewStudent);
  return addNewStudent;
}
