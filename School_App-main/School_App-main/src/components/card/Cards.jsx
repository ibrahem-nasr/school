import React, { useState, useEffect } from "react";
import styles from "./Cards.module.css";
import Card from "./Card.jsx";
import Filter from "../filter/Filter.jsx";
import Modal from "../modal/Modal.jsx";
import Button from "../buttons/Button.jsx";
import AddStudent from "../addStudent/AddStudent";

const Cards = () => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("studentData");
    return savedData ? JSON.parse(savedData) : [
      {
        name: "Ahmed Sultan",
        age: 19,
        address: "minufia , sheben El Kom",
        phone: "01028114679",
        gender: "boy",
      },
    ];
  });
  const [show, setShow] = useState(true);
  const [filter, setFilter] = useState("");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("studentData", JSON.stringify(data));
  }, [data]);

  const DeleteCard = (e, idx) => {
    setData((prevState) =>
      prevState.filter((el, index) => index !== idx)
    );
  };

  const FilterNames = (name) => {
    setFilter(name);
  };

  const NameHandler = () => {
    return filter.length > 0
      ? data.filter((el) =>
          el.name.toLowerCase().includes(filter.toLowerCase())
        )
      : data;
  };

  const addStudent = (studentInfo) => {
    setData((prevState) => {
      const updatedData = [...prevState, { ...studentInfo }];
      return updatedData;
    });
  };

  return (
    <div className={styles.container}>
      <Modal showModal={modal} closeModal={() => setModal(false)}>
        <AddStudent student={addStudent} closeModal={() => setModal(false)} />
      </Modal>
      <div className={styles.btnContainer}>
        <Button
          className={styles.btn}
          onClick={() => setShow(!show)}
          value={show ? "Hide Cards" : "Show Cards"}
        />
        <Button
          className={styles.btn}
          onClick={() => setModal(true)}
          value="Add Record"
        />
      </div>
      <Filter Filtration={FilterNames} />
      <div className={show ? styles.show : styles.hide}>
        <Card dataList={NameHandler()} DeleteCard={DeleteCard} />
      </div>
    </div>
  );
};

export default Cards;