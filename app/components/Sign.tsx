'use client'
import { useState } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  address: string;
  country: string;
  phone: string;
};

export default function Sign() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    address: "",
    country: "",
    phone: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    setError("");

    try {
      const res = await fetch("/api/formdata", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong");
        return;
      }
      setSuccess(true);
      setFormData({ firstName: "", lastName: "", address: "", country: "", phone: "" });
      console.log("Server response:", data);
    } catch (err) {
      console.error(err);
      setError("Failed to submit form");
    }
  };

  return (
    <div className="signdiv">
      <div className="relative">
        <form className="formdiv form-b f-absolute" onSubmit={handleSubmit}>
          <h2>Sign Up</h2>

          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
          {success && <p className="success-msg">Data submitted successfully!</p>}
          {error && <p className="error-msg">{error}</p>}
        </form>
      </div>
    </div>
  );
}