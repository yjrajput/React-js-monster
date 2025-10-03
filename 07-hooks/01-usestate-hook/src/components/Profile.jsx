import React, { useState } from 'react'

const Profile = () => {
  const [user, setUser] = useState({
    name: '',
    age: '',
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", user); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter user name"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="age"
          placeholder="Enter user age"
          value={user.age}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      <h1>Name: {user.name}</h1>
      <p>Age: {user.age}</p>
    </div>
  );
};

export default Profile;
