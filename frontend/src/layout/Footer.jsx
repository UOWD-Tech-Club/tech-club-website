import React from 'react';
import styles from "./Footer.module.css";


const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.contentcontainer}>
          <div className={styles.navigation}>
            <h3>Navigation</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>
          <div className={styles.socials}>
            <h3>Socials</h3>
            <ul>
              <li><a href="https://www.instagram.com/uowd_tech_club/">Instagram</a></li>
              <li><a href="https://chat.whatsapp.com/EIKeuIKUuEaDBSOpwDWEq4">Whatsapp</a></li>
              <li><a href="https://www.linkedin.com/company/uowd-tech-club/?originalSubdomain=ae">Linkedin</a></li>
            </ul>
          </div>
          <div className={styles.subscribe}>
            <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
            <span>To get the latest updates on our workshops and more</span>
            <form>
              <input type="text" placeholder="Enter Address" />
              <button type="submit">SUBSCRIBE</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer