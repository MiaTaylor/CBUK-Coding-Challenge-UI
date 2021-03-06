import { useState } from "react";
import { Student } from "../../types";
import Search from "../search";
import StudentsTable from "./StudentsTable";

interface StudentRecordsProps {
  students: Student[];
}

// Logic for the search and table
const StudentRecords = ({ students }: StudentRecordsProps) => {
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
    <div className="container">
      <div className="p-bottom-1">
        <Search searchRecords={searchRecords} />
      </div>
      <StudentsTable students={studentResults} />
    </div>
  );
};

export default StudentRecords;
