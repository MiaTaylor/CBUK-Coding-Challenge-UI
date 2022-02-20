import { useState } from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import Header from "./components/header/Header";
import Routing from "./components/routing";
import student_records from "./student_records.json";
import { Student } from "./types";

function App() {
  const [students, setStudents] = useState<Student[]>(
    student_records.Students as Student[]
  );

  const updateStudent = (student: Student) => {
    const studentIndex = students.findIndex((s) => {
      return s.source_id === student.source_id;
    });
    if (studentIndex !== -1) {
      let updatedStudents = students;
      updatedStudents.splice(studentIndex, 1, student);
      setStudents(updatedStudents);
    }
  };

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CBUK Coding Challenge UI</title>
        <link rel="canonical" href="" />
        <script
          src="https://kit.fontawesome.com/96c8bf03d5.js"
          crossOrigin="anonymous"
        ></script>
      </Helmet>
      <div className="p-left-right-5">
        <Header />
        <Routing students={students} updateStudent={updateStudent} />
      </div>
    </div>
  );
}

export default App;
