import { useEffect, useState } from "react";
import StudentForm from "./components/StudentForm/StudentForm";
import StudentTable from "./components/StudentTable/StudentTable";
import { getStudents } from "./services/students";

export default function App() {
  const [students, setStudents] = useState([]);

  const refresh = async () => {
    const res = await getStudents();
    setStudents(res.data);
  };

  const sortBy = (key) => {
    const sorted = [...students].sort((a, b) =>
      a[key].localeCompare(b[key])
    );
    setStudents(sorted);
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <div style={{ width: "400px", margin: "auto" }}>
      <StudentForm onAdd={refresh} />
      <StudentTable
        students={students}
        onDelete={refresh}
        onSort={sortBy}
      />
    </div>
  );
}
