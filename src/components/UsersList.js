import React, { useState } from 'react';
import { users as initialUsers } from '../data/dummyData';
import './UsersList.css'; // Import CSS

const UsersList = () => {
    const [users, setUsers] = useState(initialUsers);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleEdit = (userId) => {
        const newName = prompt('Enter the new name:');
        if (newName) {
            const updatedUsers = users.map(user =>
                user.id === userId ? { ...user, name: newName } : user
            );
            setUsers(updatedUsers);
        }
    };

    const handleBan = (userId) => {
        const updatedUsers = users.map(user =>
            user.id === userId ? { ...user, active: !user.active } : user
        );
        setUsers(updatedUsers);
    };

    const filteredUsers = users.filter(user =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const activeUsers = filteredUsers.filter(user => user.active).length;

    return (
        <div className="users-list">
            <h1>Users Management</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search by username, name, or email..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            <div className="kpi-container">
                <div className="kpi-box">Total Users: {filteredUsers.length}</div>
                <div className="kpi-box">Users Active in Last 24 Hours: {activeUsers}</div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <span className={`status ${user.active ? 'active' : 'inactive'}`}>
                                    {user.active ? 'Active' : 'Inactive'}
                                </span>
                            </td>
                            <td>
                                <button className="edit" onClick={() => handleEdit(user.id)}>Edit</button>
                                <button className="ban" onClick={() => handleBan(user.id)}>
                                    {user.active ? 'Ban' : 'Unban'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersList;
