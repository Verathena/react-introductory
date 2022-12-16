import PropTypes from 'prop-types'
import { FaFacebook, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = ({ text, bgColor, textColor }) => {
  // for the css styling
  const footerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <footer style={footerStyle}>
      <h4>{text}</h4>
      <FaFacebook/>
      <FaTwitter/>
      <FaLinkedinIn/>
      <p> &copy; Copyright by Team GitHub, 2023</p>
    </footer>
  );
};

Footer.defaultProps = {
  text: "Contact Us",
  bgColor: "#FF6A95",
  textColor: "#fff",
};

Footer.propTypes = {
  text: PropTypes.string,
};

export default Footer;
