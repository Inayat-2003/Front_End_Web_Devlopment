import React from 'react';
// Task 1:
// Create a React component UserCard that accepts name, age, and location as
// props and displays them in a card format.
function UserCard(props) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '16px',
      width: '250px',
      margin: '10px auto',
      backgroundColor: '#f5f5f5'
    }}>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Location: {props.location}</p>
    </div>
  );
}

export default UserCard;