import React, { useState } from 'react';
import './Settings.css'; // Import CSS

const Settings = () => {
    const [settings, setSettings] = useState({
        notifications: true,
        darkMode: false,
    });

    const handleToggle = (e) => {
        const { name, checked } = e.target;
        setSettings({ ...settings, [name]: checked });
    };

    const handleSave = () => {
        // Save settings updates, e.g., to a backend service
        console.log('Settings updated:', settings);
    };

    return (
        <div className="settings">
            <h1>Settings</h1>
            <div className="settings-item">
                <label>
                    <input
                        type="checkbox"
                        name="notifications"
                        checked={settings.notifications}
                        onChange={handleToggle}
                    />
                    Enable Notifications
                </label>
            </div>
            <div className="settings-item">
                <label>
                    <input
                        type="checkbox"
                        name="darkMode"
                        checked={settings.darkMode}
                        onChange={handleToggle}
                    />
                    Dark Mode
                </label>
            </div>
            <button type="button" onClick={handleSave}>Save Settings</button>
        </div>
    );
};

export default Settings;
