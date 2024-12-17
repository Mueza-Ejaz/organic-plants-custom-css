
const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="pera">We’d love to hear from you! Feel free to reach out using the contact form below.</p>
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Your Name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Your Email" />

        <label htmlFor="message">Message</label>
        <textarea id="message" placeholder="Your Message"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
