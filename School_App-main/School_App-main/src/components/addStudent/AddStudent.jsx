import React, { useState } from "react";
import Form from "../layout/Form";
import styles from "./AddStudent.module.css";
import Button from "../buttons/Button";

const AddStudent = ({student,closeModal}) => {
  const [name, setName] = useState("");

  const [age, setAge] = useState("");

  const [address, setAddress] = useState("");

  const [phone, setPhone] = useState("");

  const [gender, setGender] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const ageHandler = (e) => {
    setAge(e.target.value);
  };
  const addressHandler = (e) => {
    setAddress(e.target.value);
  };
  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };
  const genderHandler = (e) => {
    setGender(e.target.value);
  };

  const AddStudent = (e) => {
    e.preventDefault();
    student({name,age,address,phone,gender})
    closeModal()
    setName("");
    setAge("");
    setAddress("");
    setPhone("");
    setGender("");
  };

  return (
    <Form onSubmit={AddStudent}>
      <div className={styles.row}>
        <div className="col-25">
          <label htmlFor="Student name">Name</label>
        </div>
        <div className="col-75">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Student name.."
            value={name}
            onChange={nameHandler}
          />
        </div>
      </div>
      <div className={styles.row}>
        <div className="col-25">
          <label htmlFor="age">Age</label>
        </div>
        <div className="col-75">
          <input
            type="text"
            id="age"
            name="age"
            placeholder="Student Age.."
            value={age}
            onChange={ageHandler}
          />
        </div>
      </div>
      <div className={styles.row}>
        <div className="col-25">
          <label htmlFor="address">Address</label>
        </div>
        <div className="col-75">
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Student Address.."
            value={address}
            onChange={addressHandler}
          />
        </div>
      </div>
      <div className={styles.row}>
        <div className="col-25">
          <label htmlFor="phone">Phone</label>
        </div>
        <div className="col-75">
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Student phone.."
            value={phone}
            onChange={phoneHandler}
          />
        </div>
      </div>
      <div className={styles.row}>
        <div className="col-25">
          <label htmlFor="Type">Gender</label>
        </div>
        <div className="col-75">
          <input
            type="text"
            id="Type"
            name="Type"
            placeholder="Student Gender.."
            value={gender}
            onChange={genderHandler}
          />
        </div>
      </div>
      <br />
      <div className={styles.btnContainer}>
        <Button value="Submit" type="submit" />
      </div>
    </Form>
  );
};

export default AddStudent;
