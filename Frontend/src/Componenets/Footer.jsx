import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyles.container}>
      <div style={footerStyles.buttonContainer}>
        <button id="bt" className="item-center" style={footerStyles.contactButton}>
          Contact Us
        </button>
      </div>
      <p style={footerStyles.quote}>
        "Dive into a world of stories—where every book is a new adventure waiting to unfold!"
      </p>
      <p style={footerStyles.contactInfo}>Phone: 127-865-586-67</p>
      <p style={footerStyles.copyRight}>
        &copy; {new Date().getFullYear()} BookStore. All Rights Reserved.
      </p>
    </footer>
  );
};

const footerStyles = {
  container: {
    backgroundColor: '#1c1c1c', /* Dark background for the footer */
    padding: '2rem 0',
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1rem',
  },
  contactButton: {
    backgroundColor: '#646cff', /* Light blue background */
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '12px 25px',
    fontSize: '1.1em',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  contactButtonHover: {
    backgroundColor: '#535bf2', /* Darker blue on hover */
  },
  quote: {
    fontStyle: 'italic',
    margin: '0 0 1.5rem 0',
    fontSize: '1.2em',
  },
  contactInfo: {
    margin: '0',
    fontSize: '1em',
  },
  copyRight: {
    marginTop: '1.5rem',
    fontSize: '0.9em',
  },
};

export default Footer;

