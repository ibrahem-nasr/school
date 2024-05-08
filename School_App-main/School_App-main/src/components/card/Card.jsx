import React, { Fragment } from "react";
import styles from "./Cards.module.css";
const Card = ({ dataList, DeleteCard }) => {
  const card = dataList.map(({ name, age, address, phone, gender }, index) => {
    return (
      <div
        className={styles.card}
        key={index}
        style={{
          backgroundColor: gender === "girl" ? "pink" : "cornflowerblue",
          color: gender === "girl" ? "black" : "white",
        }}
      >
        <p>Name : {name}</p>
        <p>Age : {age}</p>
        <p>Address : {address}</p>
        <p>Phone : {phone}</p>

        <span
          className={styles.deleteBtn}
          onClick={(e) => DeleteCard(e, index)}
        >
          X
        </span>
      </div>
    );
  });
  return <Fragment>{card}</Fragment>;
};

export default Card;
