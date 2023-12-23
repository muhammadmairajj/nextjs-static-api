"use client";
import React from 'react'

const DeleteBtn = ({ userId }) => {
    const deleteUser = async () => {
        const res = await fetch(`http://localhost:3000/api/users/${userId}`, {
            method:"DELETE"
        })
        const result = await res.json();
        if(result) {
            alert('User Successfully Deleted');
        }
    }
  return (
    <div>
        <button onClick={deleteUser}>Delete</button>
    </div>
  )
}

export default DeleteBtn