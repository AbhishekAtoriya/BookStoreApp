import React from 'react';
import { useAuth } from '../context/AuthProvider';
import { toast } from 'react-hot-toast'; // Ensure this import

function Logout() {
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      // Clear user data and update state
      setAuthUser({
        ...authUser,
        user: null
      }); 
      localStorage.removeItem("Users");
      toast.success("Logout successful");
      document.getElementById("my_model_3").closest();
      setTimeout(() => {
        window.location.reload();
      },3000);
    } catch (error) {
      toast.error(`Error: ${error.message}`); // Improved error message
      setTimeout(() => {} , 3000);
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
