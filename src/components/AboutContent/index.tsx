import React from "react";
import styles from "@/components/AboutContent/AboutContent.module.css";

const AboutContent = (): React.ReactElement => {
  return (
    <section className={styles.about}>
      <div className={styles.maxWidth}>
      <br />
     
        <br />
        <h2 className={styles.title}>Sobre a Empresa</h2>

        <div className={styles.aboutContent}>
          <div className={`${styles.column} ${styles.left}`}>
            <img
              src="/images/AboutContent/premium_v5.jpg "
              alt="Nossa Missão"
              className={styles.image}
            />
          </div>
          <div className={`${styles.column} ${styles.right}`}>
            <div className={styles.text}>Nossa Missão</div>
            <p className={styles.description}>
              Ser uma referência no mercado, entregando resultados que façam a
              diferença. Nosso foco está em desenvolver soluções criativas e
              inovadoras que gerem valor para os nossos clientes e parceiros.
            </p>
          </div>
        </div>

        <div className={styles.aboutContent}>
          <div className={`${styles.column} ${styles.left}`}>
            <img
              src="/images/AboutContent/premium_v5.jpg "
              alt="Nossa Missão"
              className={styles.image}
            />
          </div>
          <div className={`${styles.column} ${styles.right}`}>
            <div className={styles.text}>Nossa Missão</div>
            <p className={styles.description}>
              Ser uma referência no mercado, entregando resultados que façam a
              diferença. Nosso foco está em desenvolver soluções criativas e
              inovadoras que gerem valor para os nossos clientes e parceiros.
            </p>
          </div>
        </div>

        <div className={styles.aboutContent}>
          <div className={`${styles.column} ${styles.left}`}>
            <img
              src="/images/AboutContent/premium_v5.jpg "
              alt="Nossa Missão"
              className={styles.image}
            />
          </div>
          <div className={`${styles.column} ${styles.right}`}>
            <div className={styles.text}>Nossa Missão</div>
            <p className={styles.description}>
              Ser uma referência no mercado, entregando resultados que façam a
              diferença. Nosso foco está em desenvolver soluções criativas e
              inovadoras que gerem valor para os nossos clientes e parceiros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
