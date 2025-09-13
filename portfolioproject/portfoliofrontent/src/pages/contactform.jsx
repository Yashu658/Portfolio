import { useState } from "react";
import emailjs from "@emailjs/browser";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isValid, setIsValid] = useState(false); 

  const validateForm = (data = formData) => {
    let valid = true;
    let newErrors = { name: "", email: "", message: "" };

    // Name Validation
    if (data.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters long.";
      valid = false;
    }

    // Email Validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(data.email)) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }

    // Message Validation
    if (data.message.trim().length < 2) {
      newErrors.message = "Message must be at least 2 characters long.";
      valid = false;
    }

    setErrors(newErrors);
    setIsValid(valid);
    return valid;
  };

  const handleChange = (e) => {
    const newFormData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newFormData);
    validateForm(newFormData); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    emailjs
      .send(
        "service_yd6llv9",  // EmailJS Service ID
        "template_82yibkr", //  EmailJS Template ID
        {
          from_name: formData.name, 
          from_email: formData.email,
          message: formData.message,
        },
        emailjs.init("9rsia7-YA1_yQrCba")  // EmailJS public key
      )
      .then(
        (response) => {
          console.log("Email successfully sent!", response.status, response.text);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); 
          setIsValid(false); 
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("Failed to send message.");
      });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
        Contact Me
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className={`w-full bg-gray-800 text-white py-2 rounded-full font-semibold transition-all ${
            !isValid ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"
          }`}
          disabled={!isValid} 
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;