// components/Footer.js
import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer footer-container">         
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} | Tun Yar Zar Toe. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
