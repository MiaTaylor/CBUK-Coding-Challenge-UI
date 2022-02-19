import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import student_records from "../../student_records.json";
import { Student } from "../../types";
import StudentView from "./View";

const StudentPage = () => {
  const { id }: any = useParams();
  const [students] = useState<Student[]>(student_records.Students as Student[]);
  const [student, setStudent] = useState<Student | null>();

  useEffect(() => {
    const studentIndex = students.findIndex((s) => {
      return s.source_id === id;
    });
    if (studentIndex !== -1) {
      setStudent(students[studentIndex]);
    }
  }, [id, students]);

  return <div>{student && <StudentView student={student} />}</div>;
};

export default StudentPage;
