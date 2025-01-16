import React from "react";
import styles from "@/components/ContactContent/ContactContent.module.css";

const ContactContent = (): React.ReactElement => {
  return (
    <div className={`${styles.column} ${styles.left}`}>
      <p>
        Entre em contato para saber mais sobre nossos serviços e como podemos
        ajudar a sua empresa a crescer.
      </p>
      <div className={styles.icons}>
        <div className={styles.row}>
          <i className="fa-solid fa-user"></i>
          <div className={styles.info}>
            <div className={styles.head}>Empresa</div>
            <div className={styles.subTitle}>Armando Mateus</div>
          </div>
        </div>

        <div className={styles.row}>
          <i className="fa-solid fa-location-dot"></i>
          <div className={styles.info}>
            <div className={styles.head}>Endereço</div>
            <div className={styles.subTitle}>
              Avenida Winston Churchill, Centro
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <i className="fa-solid fa-envelope"></i>
          <div className={styles.info}>
            <div className={styles.head}>E-mail</div>
            <div className={styles.subTitle}>contato@armandomateus.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
