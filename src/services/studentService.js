const {v4: uuid} = require("uuid");
const {readData, saveData} = require("../utils/fileUtils");

const getAllStudents = () => {
  return readData();
}

const getStudentById = (id) => {
  return readData().find(student => student.id === id);
}

const createStudent = (data) => {
  const students = readData();
  const newStudent = {
    id: uuid(),
    ...data
  };
  students.push(newStudent);
  saveData(students);
  return newStudent;
}

const updateStudent = (id, data) => {
  const students = readData();
  const studentIndex = students.findIndex(student => student.id === id);

  // Não encontrou o index
  if (studentIndex === -1) return;

  students[studentIndex] = {
    ...students[studentIndex],
    ...data
  }

  saveData(students);
  return students[studentIndex];
}

const deleteStudent = (id)  => {
  const students = readData();
  const remainingStudents = students.filter(aluno => aluno.id !== id);
  if (students.length === remainingStudents.length) {
    return false;
  }
  saveData(remainingStudents);
  return true;
}


module.exports = {
  createStudent,
  deleteStudent,
  updateStudent, 
  getAllStudents,
  getStudentById
}