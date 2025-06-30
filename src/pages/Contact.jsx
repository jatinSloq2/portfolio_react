import { useState } from "react"; // Importing React and useState for managing form state
import { toast } from "react-toastify"; // Importing ToastContainer and toast for displaying notifications
import "react-toastify/dist/ReactToastify.css"; // Importing Toastify's CSS
import { contactForm } from "../api/ContactApi";
import Heading from "../components/Utils/Heading";
import { toastStyle } from "../components/Utils/ToastStyle";
import CustomToast from "../components/others/ToastNotification"; // Importing the custom toast component for notifications

const Contact = () => {
  // Setting up state for form data (name, email, message) and errors
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Setting up state for form validation errors and form submission status
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handling form input changes and updating the form state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value, // Updating the specific field (name, email, message) in the formData
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" })); // Removing the specific error for the field
    }
  };

  // Validating the form fields
  const validateForm = () => {
    const newErrors = {}; // Object to store validation errors

    // Validation for each field
    if (!formData.name.trim()) newErrors.name = "Name is required"; // Name is required
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"; // Email is required
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"; // Validating email format
    }
    if (!formData.message.trim()) newErrors.message = "Message is required"; // Message is required

    setErrors(newErrors); // Updating errors state
    return Object.keys(newErrors).length === 0; // If no errors, return true, otherwise false
  };

  // Handling form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (!validateForm()) return; // If form validation fails, stop submission
    setIsSubmitting(true); // Set isSubmitting to true to disable the submit button while sending data

    try {
      // Sending the form data to the backend via Axios
      const response = await contactForm(formData);

      // If submission is successful
      if (response) {
        toast.success(
          <CustomToast message="Thankyou for contacting us" type="success" />,
          {
            icon: false,
            closeButton: false,
            autoClose: 2000, // Auto-close after 2 seconds
            style: toastStyle("success"), // Apply success toast style
          }
        );

        // Reset form data and errors after successful submission
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      }
    } catch (error) {
      console.error("Error:", error); // Log the error for debugging
      let errorMessage = "Network error. Please try again later."; // Default error message

      // Handling specific error responses from the API
      if (error.response) {
        errorMessage = error.response.data.message || errorMessage; // If API provides a message, use it
      }

      // Show error toast with the specific error message
      toast.error(<CustomToast message={errorMessage} type="error" />, {
        icon: false,
        closeButton: false,
        autoClose: 2000, // Auto-close after 2 seconds
        style: toastStyle("error"), // Apply error toast style
      });
    } finally {
      setIsSubmitting(false); // Set isSubmitting to false after submission attempt (whether successful or failed)
    }
  };

  return (
    <>
    <main
      id="contact"
      className="relative container mx-auto pt-20 pb-10 md:pt-22 px-4 animate-fade-in h-auto max-w-[1200px] border-l-2 border-r-2 border-dashed border-gray-500 dark:border-gray-700"
    >
      <div className="container mx-auto px-6 lg:px-20">
      <Heading name="&lt; Contact Me. /&gt; "/>
        

        {/* Contact Info & Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
          {/* Left Side: Contact Info */}
          <div>
            <h2 className="text-4xl font-semibold mb-6 animate-text text-black dark:text-white">
              Let's Do Something Awesome
            </h2>
            <p className="mb-6 animate-text font-semibold text-emerald-600 dark:text-emerald-600">
              Get in touch with me through any of the following:
            </p>
            <div className="space-y-4">
              <p className="flex items-center gap-3">
                <span className="text-xl">📍</span>Tonk Phatak, Jaipur,
                Rajasthan, India
              </p>
              <p className="flex items-center gap-3">
                <span className="text-xl">📞</span>
                <a href="tel:7240440461"> +91 7240440461</a>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-xl">✉️</span>{" "}
                <a href="mailto:jatinsingh098loq2@gmail.com">
                  jatinsingh098loq2@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div>
            <h2 className="text-3xl mb-6 animate-text font-semibold text-black dark:text-white">
              Hey, how about we catch up over coffee and have a chat?
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Hidden input field for access key */}
              {/* <input type="hidden" name="access_key" defaultValue="0403f34b-a853-4f91-bab6-bd485469eeac" /> */}

              {/* Name Input */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                  value={formData.name}
                  onChange={handleChange} // Handle input change
                  className={`w-full px-4 py-3 bg-gray-100 dark:bg-white/10 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 ${
                    errors.name ? "border border-red-500" : ""
                  }`} // Display error message if any
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}{" "}
                {/* Error message */}
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email*"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-100 dark:bg-white/10 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 ${
                    errors.email ? "border border-red-500" : ""
                  }`} // Display error message if any
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Message Textarea */}
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message*"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-100 dark:bg-white/10 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 ${
                    errors.message ? "border border-red-500" : ""
                  }`} // Display error message if any
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full border border-gray-500 text-black dark:text-white font-semibold py-3 hover:bg-emerald-400 hover:text-white dark:hover:text-black transition disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting} // Disable the button during form submission
              >
                {isSubmitting ? "Sending..." : "Send Message"}{" "}
                {/* Show sending text while form is being submitted */}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
      </>
  );
};

export default Contact;
