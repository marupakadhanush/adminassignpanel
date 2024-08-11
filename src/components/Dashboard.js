import React, { useState } from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title, PointElement, LineElement } from 'chart.js';
import './Dashboard.css';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title, PointElement, LineElement);

const Dashboard = () => {
    const [users, setUsers] = useState([
        { user_id: 1, username: 'john_doe', name: 'John Doe', email: 'john@example.com' },
        { user_id: 2, username: 'jane_smith', name: 'Jane Smith', email: 'jane@example.com' },
        { user_id: 3, username: 'sam_wilson', name: 'Sam Wilson', email: 'sam@example.com' },
    ]);

    const [posts, setPosts] = useState([
        { post_id: 1, caption: 'Hello World', media_url: 'https://example.com/image1.jpg' },
        { post_id: 2, caption: 'React is awesome', media_url: 'https://example.com/image2.jpg' },
        { post_id: 3, caption: 'Enjoying the weather', media_url: 'https://example.com/image3.jpg' },
    ]);

    const handleEditUser = (user_id) => {
        console.log(`Edit user with ID: ${user_id}`);
        // Implement the edit functionality
    };

    const handleDeleteUser = (user_id) => {
        setUsers(users.filter(user => user.user_id !== user_id));
    };

    const handleDeletePost = (post_id) => {
        setPosts(posts.filter(post => post.post_id !== post_id));
    };

    const barData = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Posts',
                data: [50, 80, 45, 90, 100],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
            {
                label: 'Active Users',
                data: [70, 50, 75, 95, 85],
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
            },
        ],
    };

    const pieData = {
        labels: ['Active Users', 'Inactive Users'],
        datasets: [
            {
                label: '# of Users',
                data: [300, 150],
                backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 99, 132, 0.6)'],
            },
        ],
    };

    const lineData = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
                label: 'New Posts',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.1,
            },
        ],
    };

    return (
        <div className="dashboard">
            <div className="kpi-boxes">
                <div className="kpi-box">
                    Total Users
                    <span>{users.length}</span>
                </div>
                <div className="kpi-box">
                    Total Posts
                    <span>{posts.length}</span>
                </div>
                <div className="kpi-box">
                    Users Active in 24h
                    <span>150</span>
                </div>
                <div className="kpi-box">
                    Posts in 24h
                    <span>75</span>
                </div>
            </div>
            <div className="charts">
                <div className="chart">
                    <h3>User Activity Over Time</h3>
                    <Bar data={barData} />
                </div>
                <div className="chart">
                    <h3>User Distribution</h3>
                    <Pie data={pieData} />
                </div>
                <div className="chart">
                    <h3>Posts Per Day</h3>
                    <Line data={lineData} />
                </div>
            </div>

            <div className="table-container">
                <h2 className="table-title">User List</h2>
                <table>
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Username</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.user_id}>
                                <td>{user.user_id}</td>
                                <td>{user.username}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button className="edit" onClick={() => handleEditUser(user.user_id)}>Edit</button>
                                    <button onClick={() => handleDeleteUser(user.user_id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="table-container">
                <h2 className="table-title">Post List</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Post ID</th>
                            <th>Caption</th>
                            <th>Media URL</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map(post => (
                            <tr key={post.post_id}>
                                <td>{post.post_id}</td>
                                <td>{post.caption}</td>
                                <td><a href={post.media_url} target="_blank" rel="noopener noreferrer">View</a></td>
                                <td>
                                    <button onClick={() => handleDeletePost(post.post_id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;
