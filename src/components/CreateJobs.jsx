import React, { useState } from "react";

const CreateJobs = ({submit}) => {
  const [form, setForm] = useState({
    title: "",
    company: "",
    city: "",
    description: "",
  });

  const handle = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    submit({...form, id: Math.random() * 10})
  }

  return (
    <div className="box">
      <h1 className="title is-5">Create a Vacancy</h1>
      <form onSubmit={handleSubmit}>
        <input 
            className="input"
            type="text"
            placeholder="Job title"
            required
            name="title"
            value={form.title}
            onChange={handle}
         />
        <input
          className="input mt-2"
          type="text"
          placeholder="Company name"
          name="company"
          value={form.company}
          onChange={handle}
          required
        />
        <input
          className="input mt-2"
          type="text"
          placeholder="City name"
          name="city"
          value={form.city}
          onChange={handle}
          required
        />
        <textarea
          className="input mt-2"
          type="text"
          placeholder="Description"
          name="description"
          value={form.description}
          onChange={handle}
          required
        ></textarea>
        <button className="button mt-2 is-primary">Create</button>
      </form>
    </div>
  );
};

export default CreateJobs;
