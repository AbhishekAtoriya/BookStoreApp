import React from 'react';
import { useAuth } from '../context/AuthProvider';
import { toast } from 'react-hot-toast';

function Logout() {
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      // Clear user data and update state
      setAuthUser(null); // Correctly set user to null on logout
      localStorage.removeItem("Users");
      toast.success("Logout successful");

      setTimeout(() => {
        window.location.href = "/"; // Redirect to home after logout
      }, 1000); // Shortened timeout for better UX
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <button
        className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
