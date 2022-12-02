import React, { useState } from "react";
import Styles from "../styles/Contact.module.css";

const contact = () => {
  const [item, setItem] = useState({
    name: "",
    phone: "",
    email: "",
    desc: "",
  });
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setItem({ ...item, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setItem({
      name: "",
      phone: "",
      email: "",
      desc: "",
    });
    fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("successfully done");
        alert("Thanks for contacting us!");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let { name, email, phone, desc } = item;
  return (
    <div className={Styles.container}>
      <h1 className={Styles.head}>Contact Us</h1>
      <form onSubmit={handleSubmit} method="post">
        <div className={Styles.mb3}>
          <label htmlFor="name" className={Styles.formLabel}>
            Name
          </label>
          <input
            type="name"
            name="name"
            className={Styles.formControl}
            id="name"
            value={name}
            required={true}
            onChange={handleChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className={Styles.mb3}>
          <label htmlFor="email" className={Styles.formLabel}>
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={email}
            className={Styles.formControl}
            id="email"
            onChange={handleChange}
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className={Styles.mb3}>
          <label htmlFor="phone" className={Styles.formLabel}>
            Phone
          </label>
          <input
            type="phone"
            name="phone"
            value={phone}
            onChange={handleChange}
            className={Styles.formControl}
            id="phone"
            aria-describedby="emailHelp"
          />
        </div>
        <div className={Styles.mb3}>
          <label htmlFor="desc" className={Styles.formLabel}>
            Description
          </label>
          <textarea
            name="desc"
            value={desc}
            onChange={handleChange}
            className={Styles.formControl}
            id="desc"
            rows="5"
          ></textarea>
        </div>
        <button type="submit" className={Styles.btnPrimary}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default contact;
