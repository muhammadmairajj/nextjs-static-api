"use client";
import React, { useState } from "react";
import "../style.css";

const AddUser = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        phone: '',
        age: '',
        gender: ''
    });

    // DESTRUCTURING 
    const { firstName, lastName, email, username, phone, age, gender } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newUser = {
            firstName,
            lastName,
            email,
            username,
            phone,
            age,
            gender
        }

        const res = await fetch('http://localhost:3000/api/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        });

        const addUser = await res.json();
        if(addUser.success) {
            alert('New User Created');
            setUser(addUser);
        } else {
            alert('Check you field');
        }

        console.log(user)
    }


  return (
    <div>
      <h1>New Add User</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <input type="text" placeholder="Enter First Name" name="firstName"
          onChange={onInputChange} className="input-field" />
        </div>
        <div className="form-control"> 
          <input type="text" placeholder="Enter Last Name" name="lastName"
          onChange={onInputChange} className="input-field"  />
        </div>
        <div className="form-control">
          <input type="text" placeholder="Enter Email" name="email"
          onChange={onInputChange} className="input-field"  />
        </div>
        <div className="form-control">
          <input type="text" placeholder="Enter Username" name="username"
          onChange={onInputChange} className="input-field"  />
        </div>
        <div className="form-control">
          <input type="text" placeholder="Enter Phone Number" name="phone"
          onChange={onInputChange} className="input-field"  />
        </div>
        <div className="form-control">
          <input type="number" placeholder="Enter Your Age" name="age"
          onChange={onInputChange} className="input-field"  />
        </div>
        <div className="form-control">
          <label>Male</label>
          <input type="radio" name="gender" onChange={onInputChange} value={'male'}
          className="input-radio"  />
          <label>Female</label>
          <input type="radio" name="gender" onChange={onInputChange} value={'female'}
          className="input-radio"  />
        </div>
        <input type="submit" value='SUBMIT' className="btn"  />
      </form>
    </div>
  );
};

export default AddUser;
