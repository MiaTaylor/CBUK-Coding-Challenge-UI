import { useState } from "react";
import student_records from "../../student_records.json";
import { Student } from "../../types";
import Search from "../search";
import StudentsTable from "./StudentsTable";

// Logic for the search and table
const StudentRecords = () => {
  const [students] = useState<Student[]>(student_records.Students as Student[]);
  const [studentResults, setStudentResults] = useState<Student[]>(students);

  const searchRecords = (searchText: string) => {
    if (searchText.length === 0) {
      return setStudentResults(students);
    }

    let searchResults = students.filter((student: Student) => {
      return (
        student.first_name.toLowerCase().includes(searchText.toLowerCase()) ||
        student.last_name.toLowerCase().includes(searchText.toLowerCase()) ||
        student.year_code.includes(searchText)
      );
    });

    setStudentResults(searchResults);
  };

  return (
    <div className="container p-left-5">
      <div className="p-bottom-1">
        <Search searchRecords={searchRecords} />
      </div>
      <StudentsTable students={studentResults} />
    </div>
  );
};

export default StudentRecords;
