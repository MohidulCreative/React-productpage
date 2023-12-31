import React from "react";

const Vacancy = ({ vacancy, handleDelete }) => {
  return (
    <div className="box mt-4 mb-4">
      <h1 className="title is-5">{vacancy.title}</h1>
      <span>{vacancy.company}</span>
      <p>{vacancy.city}</p>
      <div className="block"></div>
      <p>{vacancy.description}</p>
      <div className="is-flex is-justify-content-space-between">
        <button
          onClick={() => {
            window.alert(`applied for the ${vacancy.title} position`);
          }}
          className="button is-primary mt-4"
        >
          apply
        </button>

        <button
          onClick={() => handleDelete(vacancy.id)}
          className="button is-danger mt-4"
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default Vacancy;
