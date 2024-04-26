import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import illustration from "@/assets/illustration.svg";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
      <div className="bg-black p-5 rounded-lg max-w-sm w-full relative">
        <button
          className="absolute top-0 right-0 p-2 text-white hover:text-red-500"
          onClick={onClose}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
}

// Main WebPage component
function WebPage() {
  const navigate = useNavigate();
  const [isLoginOpen, setIsLoginOpen] = useState(false); 
  const [isSignupOpen, setIsSignupOpen] = useState(false); 

  const [visibleText, setVisibleText] = useState("");
  const [isTextComplete, setIsTextComplete] = useState(false);

  const words = [
    "Welcome to CodeHub, your collaborative coding platform",
    "",
    "designed to cater to the diverse needs of developers, team leads,",
    "and project managers.",
    "We're dedicated to empowering individuals and teams to efficiently",
    "achieve their coding goals.",
    "Whether you're a developer seeking real-time collaboration",
    "or a team lead in need of robust project management tools,",
    "CodeHub is your one-stop solution."
  ];

  const wordDelay = 1000;
  useEffect(() => {
    let wordIndex = 0;

    const addWordsInterval = setInterval(() => {
      setVisibleText((prevText) => (prevText ? `${prevText} ${words[wordIndex]}` : words[wordIndex]));
      wordIndex++;

      if (wordIndex === words.length) {
        clearInterval(addWordsInterval);
        setIsTextComplete(true); 
      }
    }, wordDelay);

    return () => clearInterval(addWordsInterval);
  }, []);

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const toggleSignup = () => {
    setIsSignupOpen(!isSignupOpen); 
  };

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/join"); 
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-16">
      <div className="fixed top-0 right-0 p-4 cursor-pointer" onClick={toggleLogin}>
        <span className="text-white font-bold">Login / Signup</span>
      </div>

      <div className="my-12 flex h-full min-w-full flex-col items-center justify-evenly sm:flex-row sm:pt-0">
        <div className="flex w-full animate-up-down justify-center sm:w-1/2 sm:pl-4">
          <img
            src={illustration}
            alt="CodeHub Illustration"
            className="mx-auto w-[500px] sm:w/[800px]"
          />
        </div>
        <div className="flex w-full max-w-[500px] flex-col items-center justify-center gap-4 p-4 sm:w/[500px] sm:p-8">
          <h1 className="text-4xl sm:text-5xl">CodeHub</h1>
          <p className="mb-4 text-center text-base md:mb-8">
            {isTextComplete ? "Welcome to CodeHub, your collaborative coding platform designed to cater to the diverse needs of developers, team leads, and project managers. We're dedicated to empowering individuals and teams to efficiently achieve their coding goals. Whether you're a developer seeking real-time collaboration or a team lead in need of robust project management tools, CodeHub is your one-stop solution." : visibleText}
          </p>
        </div>
      </div>

      <div className="static bottom-1 left-0 flex w-full justify-center sm:fixed">
      <span>
          Build with ❤️ by{" "}
          <a
              href="https://github.com/grandmaster0110/CodeHub"
              className="text-primary underline underline-offset-1"
          >
              Group-11 : CSN-Project
          </a>
      </span>
      </div>

      <Modal isOpen={isLoginOpen} onClose={toggleLogin}>
        <h2 className="text-2xl mb-4 text-red-500">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Username:</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your username"
              style={{ color: 'red' }} // Red text in the input field
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your password"
              style={{ color: 'red' }}
            />
          </div>
          <button type="submit" className="w-full bg-red-500 text-white p-2 rounded">Login</button>
        </form>
        <button className="w-full bg-green-500 text-white p-2 rounded mt-4" onClick={toggleSignup}>Sign Up</button>
      </Modal>

      {/* Modal for Sign-Up */}
      <Modal isOpen={isSignupOpen} onClose={toggleSignup}>
        <h2 className="text-2xl mb-4 text-green-500">Sign Up</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your email"
              style={{ color: 'green' }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Username:</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your username"
              style={{ color: 'green' }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Create a password"
              style={{ color: 'green' }}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded"
          >
            Sign Up
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default WebPage;