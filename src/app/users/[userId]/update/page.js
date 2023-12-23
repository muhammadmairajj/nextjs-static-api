"use client";
import React, { useEffect, useState } from 'react';
import "../../../style.css";

const Update = ({params}) => {
  // console.log(params)
  let id = params.userId;
  console.log(id);
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

useEffect(() => {
  getUser();
}, []);

const getUser = async () => {
  const res = await fetch(`http://localhost:3000/api/users/${id}`);
  const data = await res.json();
  console.log(data.result);
  setUser(data.result);
}



const handleSubmit = async (e) => {
    e.preventDefault();

    const updateUser = {
        firstName,
        lastName,
        email,
        username,
        phone,
        age,
        gender
    }

    const res = await fetch(`http://localhost:3000/api/users/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updateUser)
    });

    const user = await res.json();
    if(user.success) {
        alert('User Successfully Updated...');
        setUser(user);
    } else {
        alert('Check you field');
    }

    console.log(user)
}
  return (
    <div>
    <h1>Update User</h1>
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <input type="text" placeholder="Enter First Name" name="firstName"
        onChange={onInputChange} className="input-field" value={firstName} />
      </div>
      <div className="form-control"> 
        <input type="text" placeholder="Enter Last Name" name="lastName" value={lastName}
        onChange={onInputChange} className="input-field"  />
      </div>
      <div className="form-control">
        <input type="text" placeholder="Enter Email" name="email" value={email}
        onChange={onInputChange} className="input-field"  />
      </div>
      <div className="form-control">
        <input type="text" placeholder="Enter Username" name="username" value={username}
        onChange={onInputChange} className="input-field"  />
      </div>
      <div className="form-control">
        <input type="text" placeholder="Enter Phone Number" name="phone" value={phone}
        onChange={onInputChange} className="input-field"  />
      </div>
      <div className="form-control">
        <input type="number" placeholder="Enter Your Age" name="age" value={age}
        onChange={onInputChange} className="input-field"  />
      </div>
      <div className="form-control">
        <label>Male</label>
        <input type="radio" name="gender" onChange={onInputChange} value={'male'}
        checked={gender === 'male'}
        className="input-radio"  />
        <label>Female</label>
        <input type="radio" name="gender" onChange={onInputChange} value={'female'}
        checked={gender === 'female'}
        className="input-radio"  />
      </div>
      <input type="submit" value='SUBMIT' className="btn"  />
    </form>
  </div>
  )
}

export default Update