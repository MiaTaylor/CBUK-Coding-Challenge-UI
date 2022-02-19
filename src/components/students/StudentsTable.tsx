import { useNavigate } from "react-router-dom";
import { Student } from "../../types";

interface StudentTableProps {
  students: Student[];
}

// Table to display search results
const StudentsTable = ({ students }: StudentTableProps) => {
  const navigate = useNavigate();

  return (
    <div>
      <h3>Students</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Gender</th>
            <th>Ethnicity</th>
            <th>Year Group</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student: Student) => {
            return (
              <tr
                onClick={() => navigate(`/student/${student.source_id}`)}
                key={student.source_id}
              >
                <td>
                  {student.first_name} {student.last_name}
                </td>
                <td>
                  {student.address_line_1} {student.address_line_2}{" "}
                  {student.town_city} {student.postcode}
                </td>
                <td>{student.gender}</td>
                <td>{student.ethnicity_code}</td>
                <td>{student.year_code}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsTable;
