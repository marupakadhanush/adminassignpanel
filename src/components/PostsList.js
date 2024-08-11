import React, { useState } from 'react';
import './Profile.css'; // Import CSS

const Profile = () => {
    const [profile, setProfile] = useState({
        name: 'John Doe',
        email: 'johndoe@example.com',
        bio: 'This is a short bio',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleSave = () => {
        // Save profile updates, e.g., to a backend service
        console.log('Profile updated:', profile);
    };

    return (
        <div className="profile">
            <h1>Profile</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={profile.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={profile.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="bio">Bio:</label>
                    <textarea
                        id="bio"
                        name="bio"
                        value={profile.bio}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="button" className="save" onClick={handleSave}>Save</button>
            </form>
        </div>
    );
};

export default Profile;
