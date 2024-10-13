import React, { useState } from 'react';

function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    destination: '',
    date: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="text" name="destination" placeholder="Destination" onChange={handleChange} required />
      <input type="date" name="date" onChange={handleChange} required />
      <textarea name="message" placeholder="Message" onChange={handleChange}></textarea>
      <button type="submit">Book Now</button>
    </form>
  );
}

export default BookingForm;
