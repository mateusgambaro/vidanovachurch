import "../components/ContactFormStyles.css";

function ContactForm() {
  return (
    <>
      <h1 style={{marginTop: '30px'}}>Ainda tem dúvidas? Nos envie uma mensagem!</h1>
      <div className="contact-section">
        <div className="map-container">
          <iframe
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.0374136228966!2d-47.43262182376192!3d-23.495161859165158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf6040811d745d%3A0x66921dbb598ee480!2sR.%20Belmira%20Loureiro%20de%20Almeida%2C%20526%20-%2032%20-%20Jardim%20Piratininga%2C%20Sorocaba%20-%20SP%2C%2018016-321!5e0!3m2!1sen!2sbr!4v1691544216213!5m2!1sen!2sbr"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="form-container">
          <form>
            <input placeholder="Name" />
            <input placeholder="Email" />
            <input placeholder="Subject" />
            <textarea placeholder="Message" rows="4"></textarea>
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
