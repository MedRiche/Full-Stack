import { deleteStudent } from "../../services/students";
import "./StudentTable.css";

export default function StudentTable({ students, onDelete, onSort }) {
  return (
    <>
      <h2>Liste des étudiants</h2>

      <button onClick={() => onSort("name")}>Trier par Nom</button>
      <button onClick={() => onSort("email")}>Trier par Email</button>

      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Cours</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.email}>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>{s.course}</td>
              <td>
                <button
                  onClick={async () => {
                    await deleteStudent(s.email);
                    onDelete();
                  }}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
