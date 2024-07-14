import React from 'react';
import { Link } from 'react-router-dom';
import Login from "./Login";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* The Link component should be outside the form */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
              <h3 className="font-bold text-lg">Contact Us</h3>
              {/* Name */}
              <div className='mt-4 space-y-3'>
                <span>Name</span>
                <br />
                <input 
                  type="text" 
                  placeholder="Enter your fullname" 
                  className="w-80 px-3 py-1 border rounded-md outline-none" 
                  {...register("fullName", { required: true })} 
                />
                {/* Typo in the error message key */}
                {errors.fullName && <p className="text-red-500">Fullname is required.</p>}
              </div>
              {/* Email */}
              <div className='mt-4 space-y-3'>
                <span>Email</span>
                <br />
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-80 px-3 py-1 border rounded-md outline-none" 
                  {...register("email", { required: true })} 
                />
                {errors.email && <p className="text-red-500">Email is required.</p>}
              </div>
              {/* Message */}
              <div className='mt-4 space-y-3'>
                <span>Message</span>
                <br />
                <input 
                  type="text" // Corrected input type to "text"
                  placeholder="Enter your message" 
                  className="w-80 px-3 py-1 border rounded-md outline-none" 
                  {...register("message", { required: true })} 
                /> <br />
                
              </div>
              {/* Button */}
              <div className=" mt-4">
                <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Submit</button>
              </div>
            </form>
            {/* The Login component should be outside the form */}
            <Login />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
