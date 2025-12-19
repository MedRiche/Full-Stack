import fs from "fs";

const DATA_FILE = "data/students.json";



function loadStudents() {
  const data = fs.readFileSync(DATA_FILE, "utf8");
  return JSON.parse(data);
}

function saveStudents(students) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(students, null, 2));
}


export function getStudents(req, res) {
  const students = loadStudents();
  res.status(200).json(students);
}


export function addStudent(req, res) {
  const { name, email, course, experience } = req.body;


  if (!name || !email || !course) {
    return res.status(400).json({ error: "Nom, email et cours obligatoires." });
  }

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Email invalide." });
  }

  const students = loadStudents();


  if (students.find((s) => s.email === email)) {
    return res.status(409).json({ error: "Email déjà enregistré." });
  }

  const newStudent = { name, email, course, experience: experience || null };

  students.push(newStudent);
  saveStudents(students);

  res.status(201).json({
    message: "Étudiant ajouté avec succès.",
    student: newStudent,
  });
}


export function deleteStudent(req, res) {
  const { email } = req.params;

  const students = loadStudents();
  const index = students.findIndex((s) => s.email === email);

  if (index === -1) {
    return res.status(404).json({ error: "Étudiant introuvable." });
  }

  students.splice(index, 1);
  saveStudents(students);

  res.status(200).json({ message: "Étudiant supprimé avec succès." });
}
