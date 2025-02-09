import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    password: "",
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState(""); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.name === "email") {
      setEmailError("");
    }
    if (e.target.name === "password") {
      setPasswordError("");
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    return password.length >= 8 && password.length <= 12;
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!isValidEmail(formData.email)) {
      setEmailError("Invalid email format. Please enter a valid email.");
      return;
    }

    if (!isValidPassword(formData.password)) {
      setPasswordError("Password must be between 8 and 12 characters.");
      return;
    }

    const response = await fetch("http://localhost:5001/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      navigate("/special");
    } else {
      const data = await response.text();
      alert(data);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <form onSubmit={handleSignup} className="bg-white p-6 rounded shadow-md w-80">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-2"
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-2"
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-2"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full p-2 border rounded mb-2 ${emailError ? "border-red-500" : ""}`}
          required
        />
        {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
        <input
          type="password"
          name="password"
          placeholder="Password (8-12 characters)"
          value={formData.password}
          onChange={handleChange}
          className={`w-full p-2 border rounded mb-2 ${passwordError ? "border-red-500" : ""}`}
          required
        />
        {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;