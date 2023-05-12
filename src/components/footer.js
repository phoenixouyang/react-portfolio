import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import '../styles/footer.css'

export default function Footer() {
  return (
    <div className="footer">
			<a href="mailto:ouyangphoenix@gmail.com" >
				<FontAwesomeIcon icon={faEnvelope} className="social-icon" />
			</a>
			<a href="https://github.com/phoenixouyang" >
				<FontAwesomeIcon icon={faGithub} className="social-icon" />
			</a>
			<a href="https://www.linkedin.com/in/phoenixouyang/">
				<FontAwesomeIcon icon={faLinkedin} className="social-icon" />
			</a>
			<a href="https://www.instagram.com/pholovesbaking/">
				<FontAwesomeIcon icon={faInstagram} className="social-icon" />
			</a>
    </div>
  );
}
