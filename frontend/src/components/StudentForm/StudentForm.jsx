import { useState } from "react";
import { addStudent } from "../../services/students";
import "./StudentForm.css";

export default function StudentForm({ onAdd }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [experience, setExperience] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newStudent = { name, email, course, experience };
      await addStudent(newStudent);

      onAdd();
      setName("");
      setEmail("");
      setCourse("");
      setExperience("");
      setError("");
    } catch (err) {
      setError(err.response?.data?.error || "Erreur inconnue.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ajouter un étudiant</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        type="text"
        placeholder="Nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      /><br />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      /><br />

      <select
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        required
      >
        <option value="">Choisir un cours</option>
        <option value="Math">Math</option>
        <option value="Math Avancé">Math Avancé</option>
        <option value="Science">Science</option>
        <option value="Histoire">Histoire</option>
      </select><br />

      {course === "Math Avancé" && (
        <input
          type="text"
          placeholder="Expérience préalable"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
      )}

      <button type="submit">Ajouter</button>
    </form>
  );
}
