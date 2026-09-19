import { BrowserRouter, Routes, Route } from "react-router-dom";
import Question1 from "./assignment/question1/Question1";
import Question2 from "./assignment/question2/Question2";
import Question3 from "./assignment/question3/Question3";
import Student from "./assignment/question4/Student";
import Employee from "./assignment/question5/Employee";
import Product from "./assignment/question6/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/practice/q1" element={<Question1 />} />
        <Route path="/practice/q2" element={<Question2 />} />
        <Route path="/practice/q3" element={<Question3 />} />
        <Route
  path="/practice/q4"
  element={
    <Student
      name="Rijan Ghorsaini"
      rollNumber="YOUR_ROLL_NUMBER"
      address="Hetauda"
      contactNumber="YOUR_CONTACT_NUMBER"
    />
    
  }
/>
        <Route
  path="/practice/q5"
  element={
    <div>
      <h2>Question 5: Employee Component</h2>

      <p>Name: Rijan Ghorsaini</p>
      <p>Roll No: 7</p>

      <Employee
        employeeName="Ankit Adhikari"
        position="Software Developer"
        department="IT"
        salary="Rs. 60,000"
      />

      <Employee
        employeeName="Yojana Adhikari"
        position="HR Manager"
        department="Human Resources"
        salary="Rs. 70,000"
      />
    </div>
  }
/>
      <Route
  path="/practice/q6"
  element={
    <div>
      <h2>Question 6: Product Component</h2>

      <p>Name: Rijan Ghorsaini</p>
      <p>Roll No: 7</p>

      <Product
        productName="Laptop"
        price="Rs. 80,000"
        category="Electronics"
        quantity="2"
      />

      <Product
        productName="Mouse"
        price="Rs. 1,500"
        category="Accessories"
        quantity="5"
      />

      <Product
        productName="Keyboard"
        price="Rs. 2,500"
        category="Accessories"
        quantity="3"
      />
    </div>
  }
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;