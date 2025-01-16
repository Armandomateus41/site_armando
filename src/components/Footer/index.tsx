import React from "react";
import styles from "@/components/Footer/Footer.module.css";

const Footer = (): React.ReactElement => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Redes Sociais */}
        <div className={styles.socialIcons}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

        {/* Texto do Rodapé */}
        <span>
          Created By <a href="https://armandomateus.com">Armando Mateus</a> | © {new Date().getFullYear()} Todos os Direitos Reservados
        </span>
      </div>
    </footer>
  );
};

export default Footer;
