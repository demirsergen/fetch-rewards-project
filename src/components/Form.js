import React, { useState, useEffect } from "react";
import { getOccupationAndState } from "../api/getOccupationAndState";
import { postForm } from "../api/postForm";
import SuccessMessage from "./SuccessMessage";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    occupation: "",
    state: "",
  });
  const [success, setSuccess] = useState(false);
  const [occupationAndState, setOccupationAndState] = useState([]);
  const { occupations, states } = occupationAndState;

  useEffect(() => {
    getOccupationAndState().then((data) => setOccupationAndState(data));
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setForm({ ...form, [e.target.name]: value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setSuccess(false);
    try {
      postForm(form).then((response) => {
        if (response.status === 201) {
          response.json();
          setSuccess(true);
        }
      });
    } catch (error) {
      console.error(error);
    }

    setForm({
      name: "",
      email: "",
      password: "",
      occupation: "",
      state: "",
    });
  };

  const inputStyling = "border-2 p-1 w-2/3 rounded";
  const labelStyling = "text-teal-50";
  const inputContainerStyling = "flex justify-between items-center my-4";

  if (success) return <SuccessMessage />;
  return (
    <form
      onSubmit={handleSubmitForm}
      className="bg-slate-600 p-4 rounded border-2"
    >
      <h1 className="text-teal-50 text-center mb-2 text-2xl">Create User</h1>
      <div className={inputContainerStyling}>
        <label htmlFor="name" className={labelStyling}>
          Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={form.name}
          className={inputStyling}
          onChange={handleChange}
          required
        />
      </div>
      <div className={inputContainerStyling}>
        <label htmlFor="email" className={labelStyling}>
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={form.email}
          className={inputStyling}
          onChange={handleChange}
          required
        />
      </div>
      <div className={inputContainerStyling}>
        <label htmlFor="password" className={labelStyling}>
          Password
        </label>
        <input
          type="password"
          name="password"
          value={form.password}
          id="password"
          className={inputStyling}
          onChange={handleChange}
          required
        />
      </div>
      <div className={inputContainerStyling}>
        <label htmlFor="occupation" className={labelStyling}>
          Occupation:
        </label>
        <select
          name="occupation"
          id="occupation"
          value={form.occupation}
          className={inputStyling}
          onChange={handleChange}
          required
        >
          <option value="" selected disabled hidden>
            Select an Occupation
          </option>
          {occupations?.map((occupation) => (
            <option value={occupation} key={occupation}>
              {occupation}
            </option>
          ))}
        </select>
      </div>
      <div className={inputContainerStyling}>
        <label htmlFor="state" className={labelStyling}>
          State:
        </label>
        <select
          name="state"
          id="state"
          className={inputStyling}
          onChange={handleChange}
          value={form.state}
          required
        >
          <option value="" selected disabled hidden>
            Select a State
          </option>
          {states?.map((state) => (
            <option value={state.abbreviation} key={state.abbreviation}>
              {state.abbreviation}
            </option>
          ))}
        </select>
      </div>
      <button className="p-2 block mx-auto bg-teal-500 rounded w-full">
        Submit
      </button>
    </form>
  );
};

export default Form;
