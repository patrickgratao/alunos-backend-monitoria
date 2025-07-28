const studentService = require("../services/studentService");

const getAll = (_req, res) => {
  const students = studentService.getAllStudents();
  res.json(students);
}

const getById = (req, res) => {
  const student = studentService.getStudentById(req.params.id);
  if (!student) {
    return res.status(404).json({
      error: "Aluno não encontrado!"
    })
  }

  res.json(student);
}

const create = (req, res) => {
  const { nome, email, dataNascimento, curso, matricula } = req.body;

   if (!nome || !email || !dataNascimento || !curso || !matricula) {
    return res.status(400).json({ erro: 'Campos obrigatórios ausentes' });
  }

  const newStudent = studentService.createStudent({ nome, email, dataNascimento, curso, matricula });
  res.status(201).json(newStudent);
}

const update = (req, res) => {
  const updatedData = studentService.updateStudent(req.params.id, req.body);

  if (!updatedData) {
    return res.status(404).json({ erro: 'Aluno não encontrado' });
  } 
  res.json(updatedData);
}

const remove = (req, res) => {
  const deleteStudent = studentService.deleteStudent(req.params.id);
  
  if (!deleteStudent) return res.status(404).json({ erro: 'Aluno não encontrado' });
  res.status(204).send();
}

module.exports = { create, update, remove, getAll, getById}