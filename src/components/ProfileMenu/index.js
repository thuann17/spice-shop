import { useState } from "react";

const ProfileMenu = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="flex items-center gap-2"
        onClick={() => setProfileOpen(!isProfileOpen)}
      >
        <img
          src="https://i.pravatar.cc/40"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      </button>
      {isProfileOpen && (
        <div className="absolute right-0 mt-3 w-64 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-lg p-4">
          <div className="flex items-center gap-3 pb-3 border-b dark:border-gray-700">
            <img
              src="https://i.pravatar.cc/50"
              alt="Profile"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-semibold text-gray-800 dark:text-white">
                Musharof Chowdhury
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                randomuser@pimjo.com
              </p>
            </div>
          </div>

          {/* Menu Items */}
          <button className="flex items-center gap-2 w-full text-left py-2 mt-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md px-3">
            👤 Edit profile
          </button>
          <button className="flex items-center gap-2 w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md px-3">
            ⚙ Account settings
          </button>
          <button className="flex items-center gap-2 w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md px-3">
            ❓ Support
          </button>
          <button className="flex items-center gap-2 w-full text-left py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md px-3 mt-2">
            🚪 Sign out
          </button>
        </div>
      )}
    </div>
  );
};
export default ProfileMenu;
