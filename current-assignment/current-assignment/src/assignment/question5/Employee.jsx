const Employee = (props) => {
  return (
    <div>
      <h3>Employee Information</h3>

      <p>Employee Name: {props.employeeName}</p>
      <p>Position: {props.position}</p>
      <p>Department: {props.department}</p>
      <p>Salary: {props.salary}</p>

      <hr />
    </div>
  );
};

export default Employee;