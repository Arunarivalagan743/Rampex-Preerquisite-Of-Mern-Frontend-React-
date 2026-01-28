import React, { useEffect, useState } from "react";

function Form() {
  const [form, setForm] = useState({
    name: "",
    roll: "",
    department: "CSE",
    section: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
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
      setForm(JSON.parse(savedData));
    }
    console.log(form)
  }, []);
useEffect(() => {
  console.log("Form updated:", form);
}, [form]);
  return (
    <form onSubmit={onSubmit}>
      <label>Name</label>
      <input name="name" value={form.name} onChange={handleChange} />

      <br />

      <label>Roll No</label>
      <input name="roll" value={form.roll} onChange={handleChange} />

      <br />

      <label>Department</label>
      <select
        name="department"
        value={form.department}
        onChange={handleChange}
      >
        <option value="CSE">CSE</option>
        <option value="ECE">ECE</option>
        <option value="IT">IT</option>
      </select>

      <br />

      <label>Section</label>
      <div>
        <input type="radio" name="section" value="A" onChange={handleChange} checked={form.section === "A"} /> A
        <input type="radio" name="section" value="B" onChange={handleChange} checked={form.section === "B"} /> B
        <input type="radio" name="section" value="C" onChange={handleChange} checked={form.section === "C"} /> C
      </div>

      <br />

      <button type="submit">Submit</button>
      <button
        type="button"
        onClick={() => {
          localStorage.removeItem("formData");
          setForm({
            name: "",
            roll: "",
            department: "CSE",
            section: "",
          });
        }}
      >
        Clear
      </button>
    </form>
  );
}

export default Form;
