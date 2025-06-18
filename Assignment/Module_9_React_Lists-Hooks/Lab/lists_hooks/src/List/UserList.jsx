// Task 2:
// Create a list of users where each user has a unique id. Render the user list using
// React and assign a unique key to each user.



import React from 'react';

function UserList() {
  const users = [
    { id: 1, name: 'Sahil', phone:4748346 },
    { id: 2, name: 'Manav', phone: 43439284 },
    { id: 3, name: 'Elina', phone: 346346346 },
    { id: 4, name: 'Jaimin', phone: 3894698364 },
  ];

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            Name: {user.name}, 
            <br></br>
            Age: {user.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;