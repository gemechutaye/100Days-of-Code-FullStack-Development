import React from "react";
import styles from "./Info.module.css";
import ProfilePicture from "../assets/Ge200.jpg";
import emailLogo from "../assets/Email-logo.png";

export default function Info() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img
          className={styles.avatar}
          src={ProfilePicture}
          alt="Gemechu Taye"
        />
      </header>
      <div className={styles.bio}>
        <h1 className={styles.name}>Gemechu Taye</h1>
        <p className={styles.title}>Frontend Developer</p>
        <p className={styles.small}>linktr.ee/gemechutaye</p>
        <div className={styles.contacts}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.links} ${styles.email}`}
            href="mailto:tashasyarifah@outlook.com"
          >
            <img className={styles.icons} src={emailLogo} alt="" /> Email
          </a>
        
        </div>
      </div>
    </div>
  );
}
