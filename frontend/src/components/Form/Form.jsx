import React, { useEffect, useState } from "react";

function Form() {
  const [form, SetForm] = useState({
    name: "",
    roll: "",
    department: "CSE",
    section: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    SetForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    localStorage.setItem("formData", JSON.stringify(form));
  };

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      SetForm(JSON.parse(savedData));
    }
  }, []);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={form.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="roll">Roll no</label>
        <input
          type="number"
          name="roll"
          id="roll"
          value={form.roll}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="department">Department</label>
        <select
          name="department"
          id="department"
          value={form.department}
          onChange={handleChange}
        >
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="IT">IT</option>
        </select>
        <br />

        <div>
          <label>
            <input
              type="checkbox"
              name="section"
              value="A"
              checked={form.section === "A"}
              onChange={handleChange}
            />{" "}
            A
          </label>
          <label>
            <input
              type="checkbox"
              name="section"
              value="B"
              checked={form.section === "B"}
              onChange={handleChange}
            />{" "}
            B
          </label>
          <label>
            <input
              type="checkbox"
              name="section"
              value="C"
              checked={form.section === "C"}
              onChange={handleChange}
            />{" "}
            C
          </label>
        </div>
        <br />
        <input
          type="text"
          name="section"
          id="section"
          value={form.section}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
        <br />
        <button
          type="submit"
          onClick={() => {
            localStorage.removeItem("formData");
            SetForm({
              name: "",
              roll: "",
              department: "CSE",
              section: "",
            });
          }}
        >
          clear
        </button>
      </form>
    </div>
  );
}

export default Form;
