import React from "react";
import styles from "./Footer.module.css";
import twitterLogo from "../assets/Twitter-logo.png";
import githubLogo from "../assets/Github-logo.png";
import linkedinLogo from "../assets/linkedin-Logox.png"
import InstaLogo from "../assets/Instagram-Logo.png"
import facebookLogo from "../assets/facebook-circular-logo.png"


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialMedia}>
        
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={styles.links}
          href="https://twitter.com/"
        >
          <img
            src={twitterLogo}
            alt="Click to open Gemechu's Twitter"
            className={styles.socialIcons}
          />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          className={styles.links}
          href="https://facebook.com/"
        >
          <img
            src={facebookLogo}
            alt="Click to open Gemechu's FB"
            className={styles.socialIcons}
          />
        </a>



        <a
          target="_blank"
          rel="noopener noreferrer"
          className={styles.links}
          href="https://instagram.com"
        >
          <img
            src={InstaLogo}
            alt="Click to open Gemechu's Insta"
            className={styles.socialIcons}
          />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          className={styles.links}
          href="https://linkedin.com/"
        >
          <img
            src={linkedinLogo}
            alt="Click to open Gemechu's Linkedin"
            className={styles.socialIcons}
          />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          className={styles.links}
          href="https://github.com/"
        >
          <img
            src={githubLogo}
            alt="Click to open Gemechus's GitHub"
            className={styles.socialIcons}
          />
        </a>


      </div>

      {/* <socialIcons class="social-container">
        <a href="https://www.twitter.com/" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.facebook.com/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.instagram.com/"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://www.youtube.com/"
                className="youtube social">
                 <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a href="https://www.linkedin.com"
                className="linkedin social">
                 <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://www.github.com"
                className="github social">
                 <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        
  </socialIcons> */}

    </footer>
  );
}
