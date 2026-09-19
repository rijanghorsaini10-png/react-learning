const Student = (props) => {
  return (
    <div>
      <h2>Question 4: Student Information</h2>

      <p>Name: {props.name}</p>
      <p>Roll Number: {props.rollNumber}</p>
      <p>Address: {props.address}</p>
      <p>Contact Number: {props.contactNumber}</p>
    </div>
  );
};

export default Student;