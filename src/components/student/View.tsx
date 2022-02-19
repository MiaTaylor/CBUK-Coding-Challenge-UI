import { Student, StudentContact } from "../../types";

interface StudentProps {
  student: Student;
}

const StudentView = ({ student }: StudentProps) => {
  return (
    <div className="container">
      <h3 className="p-left-4">
        Student Record for {student.first_name} {student.last_name}
      </h3>
      <div className="flex-row-even">
        <div>
          <div className="record">
            <label>Pupil Admission Number</label>
            <span>{student.pupil_admission_number}</span>
          </div>
          <div className="record">
            <label>First name</label>
            <span>{student.first_name}</span>
          </div>
          <div className="record">
            <label>Legal First Name</label>
            <span>{student.legal_first_name}</span>
          </div>
          <div className="record">
            <label>Middle Name</label>
            <span>{student.middle_name}</span>
          </div>
          <div className="record">
            <label>Last Name</label>
            <span>{student.last_name}</span>
          </div>
          <div className="record">
            <label>Legal Last Name</label>
            <span>{student.legal_last_name}</span>
          </div>
          <div className="record">
            <label>Former Last Name</label>
            <span>{student.former_last_name}</span>
          </div>
          <div className="record">
            <label>Gender</label>
            <span>{student.gender}</span>
          </div>
          <div className="record">
            <label>Year Code</label>
            <span>{student.year_code}</span>
          </div>
          <div className="record">
            <label>Year Group Source ID</label>
            <span>{student.year_group_source_id}</span>
          </div>
          <div className="record">
            <label>Date of Birth</label>
            <span>{student.dob}</span>
          </div>
          <div className="record">
            <label>UPN</label>
            <span>{student.upn}</span>
          </div>
          <div className="record">
            <label>Former UPN</label>
            <span>{student.former_upn}</span>
          </div>
          <div className="record">
            <label>ULN</label>
            <span>{student.uln}</span>
          </div>
          <div className="record">
            <label>Is EAL</label>
            <span>
              {student.is_eal ? (
                <span className="fa fa-check"></span>
              ) : (
                <span className="fa fa-times"></span>
              )}
            </span>
          </div>
          <div className="record">
            <label>Free Meal</label>
            <span>
              {student.free_meal ? (
                <span className="fa fa-check"></span>
              ) : (
                <span className="fa fa-times"></span>
              )}
            </span>
          </div>
        </div>
        <div>
          <div className="record">
            <label>Free Meal 6</label>
            <span>
              {student.free_meal_6 ? (
                <span className="fa fa-check"></span>
              ) : (
                <span className="fa fa-times"></span>
              )}
            </span>
          </div>
          <div className="record">
            <label>FSM Review Date</label>
            <span>{student.fsm_review_date}</span>
          </div>
          <div className="record">
            <label>Ethnicity Code</label>
            <span>{student.ethnicity_code}</span>
          </div>
          <div className="record">
            <label>Is PP</label>
            <span>
              {student.is_pp ? (
                <span className="fa fa-check"></span>
              ) : (
                <span className="fa fa-times"></span>
              )}
            </span>
          </div>

          <div className="record">
            <label>Service Child</label>
            <span>
              {student.service_child ? (
                <span className="fa fa-check"></span>
              ) : (
                <span className="fa fa-times"></span>
              )}
            </span>
          </div>
          <div className="record">
            <label>Looked After</label>
            <span>
              {student.looked_after ? (
                <span className="fa fa-check"></span>
              ) : (
                <span className="fa fa-times"></span>
              )}
            </span>
          </div>
          <div className="record">
            <label>Ever In Care</label>
            <span>
              {student.ever_in_care ? (
                <span className="fa fa-check"></span>
              ) : (
                <span className="fa fa-times"></span>
              )}
            </span>
          </div>
          <div className="record">
            <label>Sen Category</label>
            <span>{student.sen_category}</span>
          </div>
          <div className="record">
            <label>Enrolment Status</label>
            <span>{student.enrolment_status}</span>
          </div>
          <div className="record">
            <label>Address Line 1</label>
            <span>{student.address_line_1}</span>
          </div>
          <div className="record">
            <label>Address Line 2</label>
            <span>{student.address_line_2}</span>
          </div>
          <div className="record">
            <label>Town / City</label>
            <span>{student.town_city}</span>
          </div>
          <div className="record">
            <label>County</label>
            <span>{student.county}</span>
          </div>
          <div className="record">
            <label>Country</label>
            <span>{student.country}</span>
          </div>
          <div className="record">
            <label>Postcode</label>
            <span>{student.postcode}</span>
          </div>
          <div className="record">
            <label>Start Date</label>
            <span>{student.start_date}</span>
          </div>
          <div className="record">
            <label>End Date</label>
            <span>{student.end_date}</span>
          </div>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Contact Name</th>
                <th>Relationship</th>
              </tr>
            </thead>
            <tbody>
              {student.contacts.map((contact: StudentContact) => {
                return (
                  <tr>
                    <td>{contact.name}</td>
                    <td>{contact.relationship}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentView;
