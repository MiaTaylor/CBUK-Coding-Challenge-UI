import { Route, Routes } from "react-router-dom";
import { Student } from "../../types";
import StudentPage from "../student";
import StudentRecords from "../students";

interface RoutingProps {
  students: Student[];
  updateStudent: (student: Student) => void;
}

function Routing({ students, updateStudent }: RoutingProps) {
  return (
    <Routes>
      <Route
        path="/student/:id"
        element={
          <StudentPage students={students} updateStudent={updateStudent} />
        }
      />
      <Route path="/" element={<StudentRecords students={students} />} />
    </Routes>
  );
}

export default Routing;
