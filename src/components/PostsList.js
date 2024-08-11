import React, { useState } from 'react';
import { posts as initialPosts } from '../data/dummyData';
import './PostsList.css'; // Import CSS

const PostsList = () => {
    const [posts, setPosts] = useState(initialPosts);

    const handleEdit = (postId) => {
        // Placeholder for edit functionality
        // For example, open a modal or redirect to an edit page
        console.log(`Edit post ${postId}`);
    };

    const handleDelete = (postId) => {
        // Confirm before deleting
        if (window.confirm('Are you sure you want to delete this post?')) {
            // Filter out the post with the specified ID
            setPosts(posts.filter(post => post.id !== postId));
        }
    };

    const handleView = (postId) => {
        // Placeholder for view functionality
        // For example, open a modal with post details or redirect to a details page
        console.log(`View post ${postId}`);
    };

    return (
        <div className="posts-list">
            <h1>Posts</h1>
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
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.caption}</td>
                            <td>{post.mediaUrl}</td>
                            <td>
                                <button className="edit" onClick={() => handleEdit(post.id)}>Edit</button>
                                <button className="delete" onClick={() => handleDelete(post.id)}>Delete</button>
                                <button className="view" onClick={() => handleView(post.id)}>View</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PostsList;
