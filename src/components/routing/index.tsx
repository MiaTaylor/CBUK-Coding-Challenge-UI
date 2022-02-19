import { Route, Routes } from "react-router-dom";
import StudentPage from "../student";
import StudentRecords from "../students";

function Routing() {
  return (
    <Routes>
      <Route path="/student/:id" element={<StudentPage />} />
      <Route path="/" element={<StudentRecords />} />
    </Routes>
  );
}

export default Routing;
