import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUserCog, faBell, faSignOutAlt, faCog } from '@fortawesome/free-solid-svg-icons';

const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const navigate = useNavigate();
  const location = useLocation();
  
  // Retrieve user data from location state (sent from the sign-up page)
  const { username, email } = location.state || { username: 'User', email: 'No Email' };

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  const handleLogOut = () => {
    navigate('/'); // Navigate to the login page
  };

  return (
    <div className="bg-[#F7E16B] min-h-screen flex">
      {/* Sidebar with options */}
      <aside className="bg-white w-64 p-4 shadow-md">
        <ul className="text-black text-lg">
          <li className="mb-4 flex items-center cursor-pointer" onClick={() => handleNavigation('messages')}>
            <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 mr-3" />
            MESSAGE
          </li>
          <li className="mb-4 flex items-center cursor-pointer" onClick={() => handleNavigation('profile')}>
            <FontAwesomeIcon icon={faUserCog} className="text-green-500 mr-3" />
            Edit Profile
          </li>
          <li className="mb-4 flex items-center cursor-pointer" onClick={() => handleNavigation('notifications')}>
            <FontAwesomeIcon icon={faBell} className="text-yellow-500 mr-3" />
            NOTIFICATION
          </li>
          <li className="mb-4 flex items-center cursor-pointer" onClick={handleLogOut}>
            <FontAwesomeIcon icon={faSignOutAlt} className="text-red-500 mr-3" />
            LOG OUT
          </li>
          <li className="mb-4 flex items-center cursor-pointer" onClick={() => handleNavigation('settings')}>
            <FontAwesomeIcon icon={faCog} className="text-gray-500 mr-3" />
            SETTINGS
          </li>
        </ul>
      </aside>
      
      {/* Main content */}
      <main className="flex-grow p-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          {/* Welcome message after sign-up */}
          {activeSection === 'profile' && (
            <>
              <h1 className="text-3xl font-bold mb-4">Welcome, {username}!</h1>
              <p className="text-lg mb-6">
                We're thrilled to have you here. Your email is <span className="font-bold">{email}</span>. 
                Let’s start personalizing your experience!
              </p>

              <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-lg mb-2">Username</label>
                  <input
                    type="text"
                    className="border border-black rounded-md p-2 w-full"
                    placeholder="Enter your username"
                    defaultValue={username}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-lg mb-2">Email</label>
                  <input
                    type="email"
                    className="border border-black rounded-md p-2 w-full"
                    placeholder="Enter your email"
                    defaultValue={email}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-lg mb-2">Password</label>
                  <input
                    type="password"
                    className="border border-black rounded-md p-2 w-full"
                    placeholder="Enter your password"
                  />
                </div>
                <button className="bg-black text-white py-2 px-4 rounded-md text-lg w-full">
                  Save Changes
                </button>
              </form>
            </>
          )}

          {/* Messages Section */}
          {activeSection === 'messages' && (
            <>
              <h2 className="text-2xl font-bold mb-4">Messages</h2>
              {/* Messages list */}
              <div className="space-y-4">
                <div className="bg-gray-100 p-4 rounded-md shadow-sm">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">John Doe</span>
                    <span className="text-sm text-gray-500">12:34 PM</span>
                  </div>
                  <p className="text-gray-700">Hi there! This is a sample message to illustrate the message view in the profile section.</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-md shadow-sm">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Jane Smith</span>
                    <span className="text-sm text-gray-500">11:22 AM</span>
                  </div>
                  <p className="text-gray-700">Just wanted to check in and see how you're doing. Let me know if you need anything!</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-md shadow-sm">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Alex Johnson</span>
                    <span className="text-sm text-gray-500">10:15 AM</span>
                  </div>
                  <p className="text-gray-700">Don't forget about our meeting tomorrow. Looking forward to it!</p>
                </div>
              </div>
            </>
          )}

          {/* Notifications Section */}
          {activeSection === 'notifications' && (
            <>
              <h2 className="text-2xl font-bold mb-4">Notifications</h2>
              {/* Notifications list */}
              <div className="space-y-4">
                <div className="bg-gray-100 p-4 rounded-md shadow-sm">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">System Alert</span>
                    <span className="text-sm text-gray-500">12:00 PM</span>
                  </div>
                  <p className="text-gray-700">Your account settings have been updated successfully.</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-md shadow-sm">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Reminder</span>
                    <span className="text-sm text-gray-500">11:00 AM</span>
                  </div>
                  <p className="text-gray-700">Don’t forget about the upcoming meeting scheduled for tomorrow.</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-md shadow-sm">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">New Feature</span>
                    <span className="text-sm text-gray-500">10:00 AM</span>
                  </div>
                  <p className="text-gray-700">We’ve added new features to your profile. Check them out!</p>
                </div>
              </div>
            </>
          )}

          {/* Settings Section */}
          {activeSection === 'settings' && (
            <>
              <h2 className="text-2xl font-bold mb-4">Settings</h2>
              {/* Settings content */}
              <div className="space-y-4">
                <div className="bg-gray-100 p-4 rounded-md shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Account Settings</h3>
                  <p className="text-gray-700">Manage your account settings and preferences.</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-md shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Privacy Settings</h3>
                  <p className="text-gray-700">Configure your privacy preferences and security settings.</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-md shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Notification Preferences</h3>
                  <p className="text-gray-700">Adjust your notification preferences to suit your needs.</p>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
