import React, { useState } from "react";
import styles from "@/components/Menu/Menu.module.css";

const Menu = (): React.ReactElement => {
  // useState para controlar o estado do menu
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = (): void => {
    setIsActive(!isActive);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.maxWidth}>
        <div className={styles.logo}>
          <a href="#">Armando</a>
        </div>

        <ul
          className={`${styles.menu} ${isActive ? styles.active : ""}`}
          id={styles.menuSite}
        >
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="http://localhost:3000/sobre">Sobre Empresa</a>
          </li>
          <li>
            <a href="contato.html">Contato</a>
          </li>
        </ul>
        <div className={styles.menuBtn} id="menuBtn" onClick={toggleMenu}>
          <i className="fas fa-bars" id="menu-icon"></i>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
