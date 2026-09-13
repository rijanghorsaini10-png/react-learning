import { useState } from "react";
import "./createassingmentForm.css";

const initialForm = {
  name: "",
  course: "",
  description: "",
  subjectTeacher: "",
  dueDate: "",
}

const NewCreateAssignment = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });

  const updateField = (event) => {
    const { name, value, type, checked } = event.target;
    console.log(`Updating field: ${name} = ${value}`);
    setForm((currentForm) => ({
      ...currentForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "loading", message: "Creating assignment..." });

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        },
      );

      if (!response.ok) {
        throw new Error("The demo API could not create the assignment.");
      }

      const result = await response.json();
      setStatus({
        type: "success",
        message: `Assignment created successfully (demo id: ${result.id}).`,
      });
      setForm(initialForm);
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    }
  };

  return (
    <main className="assignment-page">
      <section className="assignment-intro">
        <p className="eyebrow">Coursework studio</p>
        <h1>Create an assignment</h1>
        <p>
          Shape the brief, set the hand-in window, and send it to the demo
          service.
        </p>
      </section>

      <form className="assignment-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <label className="field field-wide">
            Title
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={updateField}
              placeholder="subject name"
              required
            />
          </label>
             <label className="field field-wide">
            Course
            <input
              type="text"
              name="course"
              value={form.course}
              onChange={updateField}
              placeholder="Course name"
              required
            />
          </label>



          <label className="field field-wide">
           Suubject teacher
            <input
              type="text"
              name="subjectTeacher"
              value={form.subjectTeacher}
              onChange={updateField}
              placeholder="Subject teacher"
              required
            />
          </label>


          <label className="field field-wide">
            Description
            <textarea
              name="description"
              value={form.description}
              onChange={updateField}
              placeholder="What should students make or investigate?"
              required
            />
          </label>

          <label className="field">
            Due date
            <input
              type="date"
              name="dueDate"
              value={form.dueDate}
              onChange={updateField}
              required
            />
          </label>

          
        </div>


        <div className="form-actions">
          <button type="submit" disabled={status.type === "loading"}>
            {status.type === "loading" ? "Sending..." : "Create assignment"}
          </button>
          {status.message && (
            <p className={`form-status ${status.type}`} role="status">
              {status.message}
            </p>
          )}
        </div>
      </form>
    </main>
  );
};

export default NewCreateAssignment;


