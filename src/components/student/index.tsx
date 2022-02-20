import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Student } from "../../types";
import StudentView from "./View";

interface StudentPageProps {
  students: Student[];
  updateStudent: (student: Student) => void;
}

const StudentPage = ({ students, updateStudent }: StudentPageProps) => {
  const { id }: any = useParams();
  const [student, setStudent] = useState<Student | null>();

  useEffect(() => {
    const studentIndex = students.findIndex((s) => {
      return s.source_id === id;
    });
    if (studentIndex !== -1) {
      setStudent(students[studentIndex]);
    }
  }, [id, students]);

  return (
    <div>
      {student && (
        <StudentView student={student} updateStudent={updateStudent} />
      )}
    </div>
  );
};

export default StudentPage;
