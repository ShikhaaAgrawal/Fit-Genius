import React, { useState } from "react";
import "./dashboard.css";

const Dashboard = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      age: 28,
      gender: "Male",
      contact: "1234567890",
      subscriptionPlan: "Premium",
      startDate: "2025-01-01",
      endDate: "2025-12-31",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 32,
      gender: "Female",
      contact: "9876543210",
      subscriptionPlan: "Basic",
      startDate: "2025-01-15",
      endDate: "2025-07-15",
    },
  ]);

  const [newUser, setNewUser] = useState({
    name: "",
    age: "",
    gender: "",
    contact: "",
    subscriptionPlan: "",
    startDate: "",
    endDate: "",
  });

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleAddUser = () => {
    setUsers([
      ...users,
      { id: users.length + 1, ...newUser },
    ]);
    setNewUser({
      name: "",
      age: "",
      gender: "",
      contact: "",
      subscriptionPlan: "",
      startDate: "",
      endDate: "",
    });
  };

  return (
    <div className="dashboard-container">
      <section className="users-section">
        <h2>User List</h2>
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Contact</th>
              <th>Subscription Plan</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.contact}</td>
                <td>{user.subscriptionPlan}</td>
                <td>{user.startDate}</td>
                <td>{user.endDate}</td>
                <td>
                  <button onClick={() => handleDelete(user.id)} className="delete-btn">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="add-user-section">
        <h2>Add User</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddUser();
          }}
        >
          <input
            type="text"
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Age"
            value={newUser.age}
            onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Gender"
            value={newUser.gender}
            onChange={(e) => setNewUser({ ...newUser, gender: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Contact"
            value={newUser.contact}
            onChange={(e) => setNewUser({ ...newUser, contact: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Subscription Plan"
            value={newUser.subscriptionPlan}
            onChange={(e) =>
              setNewUser({ ...newUser, subscriptionPlan: e.target.value })
            }
            required
          />
          <input
            type="date"
            placeholder="Start Date"
            value={newUser.startDate}
            onChange={(e) =>
              setNewUser({ ...newUser, startDate: e.target.value })
            }
            required
          />
          <input
            type="date"
            placeholder="End Date"
            value={newUser.endDate}
            onChange={(e) =>
              setNewUser({ ...newUser, endDate: e.target.value })
            }
            required
          />
          <button type="submit" className="add-btn">Add User</button>
        </form>
      </section>
    </div>
  );
};

export default Dashboard;
